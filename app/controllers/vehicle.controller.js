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
    };

    self.searchData=function(searchText){
    	
    		if(searchText.length>=3){
	    		self.jsonData.map(function(data,index,arr){
	    			if(data.type.indexOf(searchText)>-1 || data.make.indexOf(searchText)>-1 || data.model.indexOf(searchText)>-1){
	    				data.search=true;
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
