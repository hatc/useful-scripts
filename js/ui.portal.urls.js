// URL's for iNotes ui=portal mail/calendar manipulation
// Copyright (C) 2013 Yuri Agafonov
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this
// list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
// ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var formatURI = function(baseURI, fragment) {
	var r = baseURI + fragment;
	if (arguments.length === 3) {
		var presets = [], i = 0;
		for (var v in arguments[2])
			presets[i++] = v + ';' + arguments[2][v];
		r += '&PresetFields=' + presets.join(',');
	}
	return r;
};

var emailOpenURI = function(baseURI, id) {
	return formatURI(baseURI, '/($Inbox)/' + id + '/?OpenDocument&ui=portal');
};
var emailCreateURI = function(baseURI) {
	/*'/($Inbox)/$new/?EditDocument&ui=portal&Form=h_PageUI', {
 	s_ViewName : '($Inbox)'*/
	/* use ($Drafts) is important here, because if we cancel message creation in $(Inbox), copy of message already created in $(Inbox) */
	return formatURI(baseURI, '/($Drafts)/$new/?EditDocument&ui=portal&Form=h_PageUI', {
		h_EditAction : 'h_New',
		s_NotesForm : 'Memo'
	});
};

var calendarCreateURI = function(baseURI, d) {
	var pad = function (v) { return ('0' + v).slice(-2); }
	
	var d = new Date(d.getTime());
	var d_ = new Date();
	var date_ = d_.getDate();
	d_.setHours(d_.getHours() + 1);
	var date__ = d_.getDate();
	if (date__ != date_)
		d.setDate(d.getDate() + 1);
		
	var t = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
	// var d = new Date();
	t += 'T' + pad(d_.getHours()) + '0000';
	t += '$Z=' + d.getTimezoneOffset() / 60;
	return formatURI(baseURI, '/($Calendar)/$new/?EditDocument&ui=portal&Form=h_PageUI', {
		ThisStartDate : t,
		h_EditAction : 'h_New',
		s_NotesForm : 'Appointment',
		s_ViewName : '($Calendar)',
		AppointmentType : '3'
	});
};

