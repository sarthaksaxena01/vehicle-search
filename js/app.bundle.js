webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	angular.module('vehicleDashboard', []);

	__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('vehicleDashboard').controller('vehicleController', __webpack_require__(4));

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	function vehicleController() {
	    var self = this;

	    self.jsonTable='JSON';
	    
	    self.jsonData=[];
	    self.jsonShow=[];

	    self.data={
	    	type:'',
	    	make:'',
	    	model:''
	    };


	    self.options=['New','Used','Certified'];	

	    self.searchVehicle="";
	    self.jsonTitle="JSON format";

	    self.errorMsg="";
	    self.displayJson=false;

	    self.validateInput={
	    	noType:false,
	    	noMake:false,
	    	noModel:false
	    };

	    self.insertData=function(typeNew,makeNew,modelNew){

	    	if(!typeNew){

	    		self.validateInput.noType=true;
	    		self.errorMsg="*Type is missing";
	    		return;
	    	
	    	}else if(!makeNew){
	    		
	    		self.validateInput.noMake=true;
	    		self.errorMsg="*Make is missing";
	    		return;
	    	
	    	}else if(!modelNew){
	    		
	    		self.validateInput.noModel=true;
	    		self.errorMsg="*Model is missing";
	    		return;
	    	
	    	}else{

		   		self.errorMsg="";
		   		self.data={
			    	type:'',
			    	make:'',
			    	model:''
			    };
	    		self.jsonData.push({
		    		type:typeNew,
		    		make:makeNew,
		    		model:modelNew,
		    		search:false
		    	});
		    	self.jsonShow.push({
		    		type:typeNew,
		    		make:makeNew,
		    		model:modelNew
		    	});

	    	}


	    
	    };


	    self.showJson=function(){
	    	self.displayJson=!self.displayJson;
	    	self.jsonTable=self.displayJson?'TABLE':'JSON';
	    	self.jsonTitle=self.displayJson?'JSON format':'TABLE format';
	    };

	    self.searchData=function(searchText){
	    	
	    		if(searchText.length>=3){
		    		self.jsonData.map(function(data,index,arr){
		    			if(data.type.toLowerCase().indexOf(searchText.toLowerCase())>-1 || data.make.toLowerCase().indexOf(searchText.toLowerCase())>-1 || data.model.toLowerCase().indexOf(searchText.toLowerCase())>-1){
		    				data.search=true;
		    			}else{
		    				data.search=false;
		    			}
		    		});
		    	}else{
		    		self.jsonData.map(function(data){
		    			data.search=false;
		    		});
		    	}
	    	
	    	
	    };

	    self.getSearchRow=function(row){
	    	return 'search-row';
	    }

	}

	module.exports = vehicleController;


/***/ })
]);