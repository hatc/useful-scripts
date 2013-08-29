// popup window
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

var popup = function(event) {
	event.stopPropagation();
	
	var cw = 1024, ch = 768;
	/*if (typeof window.screen === 'object') {
  		if (window.screen.availWidth) { var cw = window.screen.availWidth; }
  		if (window.screen.availHeight) { var ch = window.screen.availHeight; }
  	}*/
	"object"===typeof window.screen && (window.screen.availWidth && (cw = window.screen.availWidth), window.screen.availHeight && (ch = window.screen.availHeight));
	var w = Math.min(cw, 960), h = Math.min(ch, 580);
	var l = Math.round((cw - w) / 2), t = Math.round((ch - h) / 2);
	
	var n = /.*?\/\(\$Inbox\)\/(\w+)\/.*/g.exec(event.data);
	var n = n ? n[1] : "_blank";
	window.open(event.data, n, 'left=' + l + ',top=' + t + ',width=' + w + ',height=' + h + ',location=0,menubar=0,toolbar=0,status=0,resizable=1,scrollbars=1');
};

