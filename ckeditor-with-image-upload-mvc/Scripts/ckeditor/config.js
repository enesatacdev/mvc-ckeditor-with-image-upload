/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'en';
	config.uiColor = '#6a4671';
    config.syntaxhighlight_lang = 'csharp';
    config.syntaxhighlight_hideControls = true;
    filebrowserBrowseUrl: '/Scripts/ckfinder/ckfinder.html';
    filebrowserImageBrowseUrl: '/Scripts/ckfinder/ckfinder.html?type=Images';
    filebrowserFlashBrowseUrl: '/Scripts/ckfinder/ckfinder.html?type=Flash';
    filebrowserUploadUrl: '/Scripts/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    filebrowserImageUploadUrl: '/Scripts/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    filebrowserFlashUploadUrl: '/Scripts/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    config.filebrowserImageUploadUrl = '/Scripts/Data';

    CKFinder.setupCKEditor(null, '/Scripts/ckfinder/');
};
