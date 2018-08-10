var attachments = [
	{attachmentID: '1', attachmentdescription: 'FileAttached1.doc'},
	{attachmentID: '2', attachmentdescription: 'FileAttached2.doc'},
	{attachmentID: '3', attachmentdescription: 'FileAttached3.doc'},
	{attachmentID: '4', attachmentdescription: 'FileAttached4.doc'},
	{attachmentID: '5', attachmentdescription: 'FileAttached5.doc'}
];
	
exports.getAttachments = function getAttachments(body) {
	var output=[];

	output = attachments;

	return output;
};
