const Store = require('electron-store');
const home = require('os').homedir();
const store = new Store({name: 'settings', cwd: home + '/.PathPlanner'});

class Preferences{
	constructor(){
		this.p_maxVel = store.get('maxVel', 8.0);
		this.p_maxAcc = store.get('maxAcc', 5.0);
		this.p_mu = store.get('mu', 0.77);
		this.p_wheelbaseWidth = store.get('wheelbaseWidth', 2.0);
		this.p_robotLength = store.get('robotLength', 3.0);
		this.p_timeStep = store.get('timeStep', 0.01);
		this.p_outputFormat = store.get('outputFormat', 0);
		this.p_lastGenerateDir = store.get('lastGenerateDir', 'none');
		this.p_lastPathDir = store.get('lastPathDir', 'none');
		this.currentPathName = "path";
	}

	get maxVel(){
		return this.p_maxVel;
	}

	get maxAcc(){
		return this.p_maxAcc;
	}

	get mu(){
		return this.p_mu;
	}

	get wheelbaseWidth(){
		return this.p_wheelbaseWidth;
	}

	get robotLength(){
		return this.p_robotLength;
	}

	get timeStep(){
		return this.p_timeStep;
	}

	get outputFormat(){
		return this.p_outputFormat;
	}

	get lastGenerateDir(){
		return this.p_lastGenerateDir;
	}

	get lastPathDir(){
		return this.p_lastPathDir;
	}

	set maxVel(value){
		store.set('maxVel', value);
		this.p_maxVel = value;
	}

	set maxAcc(value){
		store.set('maxAcc', value);
		this.p_maxAcc = value;
	}

	set mu(value){
		store.set('mu', value);
		this.p_mu = value;
	}

	set wheelbaseWidth(value){
		store.set('wheelbaseWidth', value);
		this.p_wheelbaseWidth = value;
	}

	set robotLength(value){
		store.set('robotLength', value);
		this.p_robotLength = value;
	}

	set timeStep(value){
		store.set('timeStep', value);
		this.p_timeStep = value;
	}

	set outputFormat(value){
		store.set('outputFormat', value);
		this.p_outputFormat = value;
	}

	set lastGenerateDir(value){
		store.set('lastGenerateDir', value);
		this.p_lastGenerateDir = value;
	}

	set lastPathDir(value){
		store.set('lastPathDir', value);
		this.p_lastPathDir = value;
	}
}