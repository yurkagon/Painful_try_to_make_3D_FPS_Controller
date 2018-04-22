class Player {
	constructor() {
		this.position = {
			x: 0,
			z: 0,
			y: 0,
		};
		
		this.rotation = {
			x: 0,
			y: 0,
		};
		this.origin = {
			x: 0,
			y: 0,
		};
		this._stepState = true;
		this._camera = $('#camera');
	}
	get camera() {
		// camera is a static DIV. All 3d operations are inside
		return this._camera;
	}
	moveForward() {
		const { position, rotation } = this;
		position.x -= Math.sin(rotation.y * Math.PI / 180) * PLAYER_MOVE_SPEED;
		position.z += Math.cos(rotation.y * Math.PI / 180) * PLAYER_MOVE_SPEED;
	}
	moveBack() {
		const { position, rotation } = this;
		position.x += Math.sin(rotation.y * Math.PI / 180) * PLAYER_MOVE_SPEED;
		position.z -= Math.cos(rotation.y * Math.PI / 180) * PLAYER_MOVE_SPEED;
	}
	moveLeft() {
		const { position, rotation } = this;
		position.x -= Math.sin((rotation.y-90) * Math.PI / 180) * PLAYER_MOVE_SPEED;
		position.z += Math.cos((rotation.y-90) * Math.PI / 180) * PLAYER_MOVE_SPEED;
	}
	moveRight() {
		const { position, rotation } = this;
		position.x -= Math.sin((rotation.y+90) * Math.PI / 180) * PLAYER_MOVE_SPEED;
		position.z += Math.cos((rotation.y+90) * Math.PI / 180) * PLAYER_MOVE_SPEED;
	}
	stepsEffect() {
		const { position, _stepState } = this;
		const value = 0.8;
		position.y += _stepState ? value : -value;
		if( Math.abs(position.y) > 12) this._stepState  = !_stepState;
	}
	rotate(degree) {
		const { rotation, origin } = this;
		rotation.y -= degree;
		if (rotation.y < 0) rotation.y += 358;
		if (rotation.y > 360) rotation.y -= 358;

		const angle = ((rotation.y % 360) / 360) * 2 * Math.PI;
	    
		origin.x = -Math.sin(angle) * FOV;
		origin.z = -(FOV - Math.cos(angle) * FOV);
	}

	getPosition() {
		return {
			x: -this.position.x - 128,
			z: -this.position.z + 700,
		}
	}
}