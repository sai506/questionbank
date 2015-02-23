sap.ui.jsview("questionbank.questionbank", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf questionbank.questionbank
	*/ 
	getControllerName : function() {
		return "questionbank.questionbank";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf questionbank.questionbank
	*/ 
	createContent : function(oController) {
	
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"350px",height:"350px"});
		oLayout.addStyleClass("CustomStyle"); //Add some additional styling for the border
		var oLabel = new sap.ui.commons.Label({text:"QUESTION BANK"});
		
		oLayout.addContent(oLabel, {right:"108px",top:"20px"});
	

		var oLabel = new sap.ui.commons.Label({text:"User Name"});
		var oNameInput = new sap.ui.commons.TextField({width:"200px"});
		oLabel.setLabelFor(oNameInput);
		oLayout.addContent(oLabel, {right:"248px",top:"62px"});
		oLayout.addContent(oNameInput, {left:"110px",top:"62px"});

		oLabel = new sap.ui.commons.Label({text:"Password"});
		oPWInput = new sap.ui.commons.PasswordField({width:"200px"});
		oLabel.setLabelFor(oPWInput);
		oLayout.addContent(oLabel, { right:"248px",top:"98px"});
		oLayout.addContent(oPWInput, {left:"110px",top:"94px"});

		var oLoginButton = new sap.ui.commons.Button({text:"Login",width:"133px"});
		oLoginButton.attachPress(function(){
			var username = oNameInput.getValue();
			var password = oPWInput.getValue();
			
			if ( username == "sai" && password == "123"){
			alert ("Login successfully");
			window.location = "index.html"; // Redirecting to other page.
			return false;
			}
			else
				{
			alert("login faild");
			return false;
				}
				
		});
		oLayout.addContent(oLoginButton, {left:"110px",top:"180px"});
		var oLabel = new sap.ui.commons.Label({text:"SUBJECT"});
		var oDropdownBox1 = new sap.ui.commons.DropdownBox("DropdownBox1");
		oDropdownBox1.setTooltip("subject");
		oDropdownBox1.setEditable(true);
		oDropdownBox1.setWidth("200px");
		var oItem = new sap.ui.core.ListItem("subject1");
		oItem.setText("ABAP");
		oDropdownBox1.addItem(oItem);
		oItem = new sap.ui.core.ListItem("subject2");
		oItem.setText("FICO");
		oDropdownBox1.addItem(oItem);
		oItem = new sap.ui.core.ListItem("subject3");
		oItem.setText("BI");
		oDropdownBox1.addItem(oItem);
		oItem = new sap.ui.core.ListItem("subject4");
		oItem.setText("HANA");
		oDropdownBox1.addItem(oItem);
		oDropdownBox1.setValue("ABAP");
		oLayout.addContent(oLabel, {right:"248px",top:"124px"});
		oLayout.addContent(oDropdownBox1, {left:"108px",top:"124px"});
return oLayout;
		// Attach the layout to the page
		//oLayout.placeAt(""");
	}

});
