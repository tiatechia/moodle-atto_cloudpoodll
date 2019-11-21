YUI.add("moodle-atto_cloudpoodll-button",function(e,t){var n="atto_cloudpoodll",r={VIDEO:"video",AUDIO:"audio"},i={LINK:"link",TAGS:"tags"},s={ENUS:"en-US",ENUK:"en-GB",ENAU:"en-AU",ENIN:"en-IN",FRCA:"fr-CA",FRFR:"fr-FR",ESUS:"es-US",ESES:"es-ES",ITIT:"it-IT",PTBR:"pt-BR",DEDE:"de-DE",KOKR:"ko-KR",HIIN:"hi-IN"},o={},u={PLAIN:"standard",BMR:"bmr",ONETWOTHREE:"onetwothree",FRESH:"fresh",ONCE:"once"},a={VIDEO:"atto_cloudpoodll_video",AUDIO:"atto_cloudpoodll_audio",UPLOAD:"atto_cloudpoodll_upload",SUBTITLE:"atto_cloudpoodll_subtitle",OPTIONS:"atto_cloudpoodll_options",LANG_SELECT:"atto_cloudpoodll_languageselect",SUBTITLE_CHECKBOX:"atto_cloudpoodll_subtitle_checkbox",MEDIAINSERT_CHECKBOX:"atto_cloudpoodll_mediainsert_checkbox",ATTO_CLOUDPOODLL_FORM:"atto_cloudpoodll_form",CP_VIDEO:"atto_cloudpoodll_video_cont",CP_AUDIO:"atto_cloudpoodll_audio_cont",CP_UPLOAD:"atto_cloudpoodll_upload_cont",CP_SWAP:"atto_cloudpoodll_swapmeout"},f={subtitling:!1,transcoding:!1,started:!1,currentrecorder:!1,insertmethod:!1,subitleaudiobydefault:0,subitlevideobydefault:0,elementid:!1,subtitlecheckbox:!1},l={ROOT:'<form class="mform atto_form atto_cloudpoodll_form" id="{{elementid}}_atto_cloudpoodll_form"><ul class="root nav nav-tabs" role="tablist">{{#if isvideo}}<li data-medium-type="{{CSS.VIDEO}}" class="nav-item"><a class="nav-link active" href="#{{elementid}}_{{CSS.VIDEO}}" role="tab" data-toggle="tab">{{get_string "video" component}}</a></li>{{else}}<li data-medium-type="{{CSS.AUDIO}}" class="nav-item"><a class="nav-link active" href="#{{elementid}}_{{CSS.AUDIO}}" role="tab" data-toggle="tab">{{get_string "audio" component}}</a></li>{{/if}}<li data-medium-type="{{CSS.UPLOAD}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{CSS.UPLOAD}}" role="tab" data-toggle="tab">{{get_string "upload" component}}</a></li><li data-medium-type="{{CSS.OPTIONS}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{CSS.OPTIONS}}" role="tab" data-toggle="tab">{{get_string "options" component}}</a></li></ul><div class="root tab-content">{{#if isvideo}}<div data-medium-type="{{CSS.VIDEO}}" class="tab-pane active" id="{{elementid}}_{{CSS.VIDEO}}"><div id="{{elementid}}_{{CSS.CP_VIDEO}}" class="{{CSS.CP_SWAP}}" data-id="{{elementid}}_{{CSS.CP_VIDEO}}" data-parent="{{CP.parent}}" data-appid="{{CP.appid}}" data-media="video" data-type="{{CP.videoskin}}" data-localloader="/lib/editor/atto/plugins/cloudpoodll/poodllloader.html" data-localloading="auto" data-width="{{CP.sizes.videowidth}}" data-height="{{CP.sizes.videoheight}}" data-transcode="{{CP.transcode}}" data-transcribe="{{subtitlevideobydefault}}" data-subtitle="{{subtitlevideobydefault}}" data-language="{{CP.language}}" data-expiredays="{{CP.expiredays}}" data-region="{{CP.region}}" data-token="{{CP.token}}" data-fallback="{{CP.fallback}}"></div></div>{{else}}<div data-medium-type="{{CSS.AUDIO}}" class="tab-pane active" id="{{elementid}}_{{CSS.AUDIO}}"><div id="{{elementid}}_{{CSS.CP_AUDIO}}" class="{{CSS.CP_SWAP}}" data-id="{{elementid}}_{{CSS.CP_AUDIO}}" data-parent="{{CP.parent}}" data-appid="{{CP.appid}}" data-media="audio" data-type="{{CP.audioskin}}" data-localloader="/lib/editor/atto/plugins/cloudpoodll/poodllloader.html" data-localloading="auto" data-width="{{CP.sizes.audiowidth}}" data-height="{{CP.sizes.audioheight}}" data-transcode="{{CP.transcode}}" data-transcribe="{{subtitleaudiobydefault}}" data-subtitle="{{subtitleaudiobydefault}}" data-language="{{CP.language}}" data-expiredays="{{CP.expiredays}}" data-region="{{CP.region}}" data-token="{{CP.token}}" data-fallback="{{CP.fallback}}"></div></div>{{/if}}<div data-medium-type="{{CSS.UPLOAD}}" class="tab-pane" id="{{elementid}}_{{CSS.UPLOAD}}"><br>{{get_string "uploadinstructions" component}}<div id="{{elementid}}_{{CSS.CP_UPLOAD}}" class="{{CSS.CP_SWAP}}" data-id="{{elementid}}_{{CSS.CP_UPLOAD}}" data-parent="{{CP.parent}}" data-appid="{{CP.appid}}" data-media="{{recorder}}" data-type="upload" data-width="450" data-height="350" data-transcode="{{CP.transcode}}" {{#if isvideo}}data-transcribe="{{subtitlevideobydefault}}" data-subtitle="{{subtitlevideobydefault}}" {{else}}data-transcribe="{{subtitleaudiobydefault}}" data-subtitle="{{subtitleaudiobydefault}}" {{/if}}data-language="{{CP.language}}"data-expiredays="{{CP.expiredays}}" data-region="{{CP.region}}" data-token="{{CP.token}}"></div></div><div data-medium-type="{{CSS.OPTIONS}}" class="tab-pane" id="{{elementid}}_{{CSS.OPTIONS}}"><br><label><input type="checkbox" id="{{elementid}}_{{CSS.MEDIAINSERT_CHECKBOX}}" class="{{CSS.MEDIAINSERT_CHECKBOX}}"{{#if mediataginsert}} checked="true" {{/if}}/>&nbsp;{{get_string "mediainsertcheckbox" component}}</label>{{#if cansubtitle}}<br><label><input type="checkbox" id="{{elementid}}_{{CSS.SUBTITLE_CHECKBOX}}" class="{{CSS.SUBTITLE_CHECKBOX}}"{{#if isvideo}}{{#if letssubtitlevideo}} checked="true" {{/if}}{{else}}{{#if letssubtitleaudio}} checked="true" {{/if}}{{/if}}/>&nbsp;{{get_string "subtitlecheckbox" component}}</label><br><label>{{get_string "speakerlanguage" component}}&nbsp;<select id="{{elementid}}_{{CSS.LANG_SELECT}}" class="{{CSS.LANG_SELECT}}"><option value="{{LANG.ENUS}}" {{#if useENUS}}selected="selected"{{/if}}>{{get_string "en-us" component}}</option><option value="{{LANG.ENUK}}" {{#if useENUK}}selected="selected"{{/if}}>{{get_string "en-uk" component}}</option><option value="{{LANG.ENAU}}" {{#if useENAU}}selected="selected"{{/if}}>{{get_string "en-au" component}}</option><option value="{{LANG.ENIN}}" {{#if useENIN}}selected="selected"{{/if}}>{{get_string "en-in" component}}</option><option value="{{LANG.ESUS}}" {{#if useESUS}}selected="selected"{{/if}}>{{get_string "es-us" component}}</option><option value="{{LANG.ESES}}" {{#if useESES}}selected="selected"{{/if}}>{{get_string "es-es" component}}</option><option value="{{LANG.FRFR}}" {{#if useFRFR}}selected="selected"{{/if}}>{{get_string "fr-fr" component}}</option><option value="{{LANG.FRCA}}" {{#if useFRCA}}selected="selected"{{/if}}>{{get_string "fr-ca" component}}</option><option value="{{LANG.ITIT}}" {{#if useITIT}}selected="selected"{{/if}}>{{get_string "it-it" component}}</option><option value="{{LANG.PTBR}}" {{#if usePTBR}}selected="selected"{{/if}}>{{get_string "pt-br" component}}</option><option value="{{LANG.KOKR}}" {{#if useKOKR}}selected="selected"{{/if}}>{{get_string "ko-kr" component}}</option><option value="{{LANG.DEDE}}" {{#if useDEDE}}selected="selected"{{/if}}>{{get_string "de-de" component}}</option><option value="{{LANG.HIIN}}" {{#if useHIIN}}selected="selected"{{/if}}>{{get_string "hi-in" component}}</option></select></label><br>{{get_string "subtitleinstructions" component}}{{else}}{{get_string \'cannotsubtitle\' component}}{{/if}}</div></div></form>'
,HTML_MEDIA:{VIDEO:'&nbsp;<video controls="true" crossorigin="anonymous">{{#if includesourcetrack}}<source src="{{sourceurl}}" type="{{sourcemimetype}}">{{/if}}<source src="{{url}}" type="{{urlmimetype}}">{{#if issubtitling}}<track src="{{subtitleurl}}" kind="captions" srclang="{{CP.language}}" label="{{CP.language}}" default="true">{{/if}}</video>&nbsp;',AUDIO:'&nbsp;<audio controls="true" crossorigin="anonymous">{{#if includesourcetrack}}<source src="{{sourceurl}}" type="{{sourcemimetype}}">{{/if}}<source src="{{url}}" type="{{urlmimetype}}">{{#if issubtitling}}<track src="{{subtitleurl}}" kind="captions" srclang="{{CP.language}}" label="{{CP.language}}" default="true">{{/if}}</audio>&nbsp;',LINK:'{{#if issubtitling}}&nbsp;<a href="{{url}}?data-subtitles={{subtitleurl}}&data-language={{CP.language}}"{{else}}&nbsp;<a href="{{url}}"{{/if}}>{{name}}</a>&nbsp;'}};e.namespace("M.atto_cloudpoodll").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(e){if(e.disabled)return;var t=new Array("audio","video");for(var n=0;n<t.length;n++)e.hasOwnProperty(t[n])&&this.addButton({icon:t[n],iconComponent:"atto_cloudpoodll",title:t[n]+"_desc",buttonName:t[n],callback:this._displayDialogue,callbackArgs:t[n]});f.insertmethod=e.insertmethod,f.subtitleaudiobydefault=e.subtitleaudiobydefault,f.subtitlevideobydefault=e.subtitlevideobydefault,f.transcoding=e.cp_transcode=="1",o.parent=M.cfg.wwwroot,o.appid="atto_cloudpoodll",o.token=e.cp_token,o.region=e.cp_region,o.expiredays=e.cp_expiredays,o.cansubtitle=e.cp_cansubtitle,o.language=e.cp_language,o.transcode=e.cp_transcode,o.audioskin=e.cp_audioskin,o.videoskin=e.cp_videoskin,o.fallback=e.fallback,o.sizes=this._fetchRecorderDimensions()},_getContext:function(t){return e.merge({elementid:this.get("host").get("elementid"),component:n,helpStrings:this.get("help"),isvideo:f.currentrecorder==r.VIDEO,cansubtitle:o.cansubtitle,recorder:f.currentrecorder,mediataginsert:f.insertmethod==i.TAGS,subtitleaudiobydefault:f.subtitleaudiobydefault,subtitlevideobydefault:f.subtitlevideobydefault,letssubtitleaudio:f.subtitleaudiobydefault==1,letssubtitlevideo:f.subtitlevideobydefault==1,useENUS:o.language==s.ENUS,useENUK:o.language==s.ENUK,useENAU:o.language==s.ENAU,useENIN:o.language==s.ENIN,useFRCA:o.language==s.FRCA,useFRFR:o.language==s.FRFR,useESUS:o.language==s.ESUS,useESES:o.language==s.ESES,useITIT:o.language==s.ITIT,usePTBR:o.language==s.PTBR,useDEDE:o.language==s.DEDE,useKOKR:o.language==s.KOKR,useHIIN:o.language==s.HIIN,CSS:a,CP:o,LANG:s},t)},_fetchRecorderDimensions:function(){var e={};switch(o.videoskin){case u.ONETWOTHREE:e.videowidth=441,e.videoheight=540;break;case u.BMR:e.videowidth=441,e.videoheight=500;break;default:e.videowidth=441,e.videoheight=450}switch(o.audioskin){default:e.audiowidth=450,e.audioheight=350}return e},_displayDialogue:function(t,s){if(this.get("host").getSelection()===!1)return;this._currentSelection=this.get("host").getSelection(),f.currentrecorder=s;switch(s){case r.VIDEO:var l=M.util.get_string("createvideo",n);switch(o.videoskin){case u.ONETWOTHREE:var c="500",h="660";break;case u.PLAIN:var c="500",h="580";break;case u.BMR:var c="500",h="620";break;default:var c="500",h=!1}break;case r.AUDIO:default:var l=M.util.get_string("createaudio",n),c="501",h=!1}o.cansubtitle&&(f.currentrecorder==r.VIDEO?f.subtitling=f.subtitlevideobydefault:f.subtitling=f.subtitleaudiobydefault);var p={};p.center=!0,p.headerContent=l,p.focusAfterHide=s,p.width=c+"px",h&&(p.height=h+"px");var d=this.getDialogue(p);d.get("width")!=c+"px"&&(d.set("headerContent",l),d.set("width",c+"px"),d.set("height",h+"px")),d.set("bodyContent",this._getDialogueContent()).show(),f.elementid=this.get("host").get("elementid"),f.subtitlecheckbox=e.one("#"+f.elementid+"_"+a.SUBTITLE_CHECKBOX),f.mediainsertcheckbox=e.one("#"+f.elementid+"_"+a.MEDIAINSERT_CHECKBOX),f.languageselect=e.one("#"+f.elementid+"_"+a.LANG_SELECT);var v=e.one("#"+f.elementid+"_"+a.ATTO_CLOUDPOODLL_FORM),m=this;f.subtitlecheckbox!=null&&(o.cansubtitle?f.subtitlecheckbox.on("click",function(e){var t=e.currentTarget;t.get("checked")?(v.all("."+a.CP_SWAP).setAttribute("data-transcribe","1"),v.all("."+a.CP_SWAP).setAttribute("data-subtitle","1"),v.all("."+a.CP_SWAP).setAttribute("data-alreadyparsed","false"),f.subtitling=!0):(v.all("."+a.CP_SWAP).setAttribute("data-transcribe","0"),v.all("."+a.CP_SWAP).setAttribute("data-subtitle","0"),v.all("."+a.CP_SWAP).setAttribute("data-alreadyparsed","false"),f.subtitling=!1),v.all("."+a.CP_SWAP).empty(),m._loadRecorders()}):this._disableSubtitleCheckbox()),f.mediainsertcheckbox!=null&&f.mediainsertcheckbox.on("click",function(e){var t=e.currentTarget;t.get("checked")?f.insertmethod=i.TAGS:f.insertmethod=i.LINK}),f.languageselect!=null&&f.languageselect.on("change",function(e){var t=e.currentTarget;t&&(o.language=t.selectedOptionValue(),v.all("."+a.CP_SWAP).setAttribute("data-language",o.language),v.all("."+a.CP_SWAP).setAttribute("data-alreadyparsed","false"),v.all("."+a.CP_SWAP).empty(),m._loadRecorders())}),this._loadRecorders()},_disableSubtitleCheckbox:function(){f.subtitlecheckbox.setAttribute("disabled",!0);var t=e.one("#"+f.elementid+"_"+a.ATTO_CLOUDPOODLL_FORM);t.all("."+a.CP_SWAP).setAttribute("data-transcribe","0"),t.all("."+a.CP_SWAP).setAttribute("data-subtitle","0")},_loadRecorders:function(){var e=this;e.uploaded=!1,e.ap_count=0,require(["atto_cloudpoodll/cloudpoodllloader"],function(t){var n=function(t){switch(t.type){case"recording":t.action==="started"&&f.subtitlecheckbox!=null&&f.subtitlecheckbox.set("disabled",!0);break;case"awaitingprocessing":e.uploaded||(setTimeout(function(){var n=t.s3root+t.sourcefilename;e._doInsert(t.mediaurl,t.mediafilename,n,t.sourcemimetype)},4e3),e.uploaded=!0);break;case"filesubmitted":break;case"error":alert("PROBLEM:"+t.message)}};t.init(a.CP_SWAP,n)})},_getDialogueContent:function(t){var r="";o.token==""?r=M.util.get_string("notoken",n):r=e.Handlebars.compile(l.ROOT)(this._getContext());var i=
e.Node.create(r);return i},_doInsert:function(t,n,s,u){this.getDialogue({focusAfterHide:null}).hide();var a={};a.url=t,a.name=n,a.issubtitling=f.subtitling,a.includesourcetrack=f.transcoding&&t!==s&&s.slice(-3)!=="wav",a.CP=o,a.subtitleurl=t+".vtt",a.sourceurl=s,a.sourcemimetype=u;var c=l.HTML_MEDIA.LINK;switch(f.insertmethod){case i.TAGS:f.currentrecorder===r.VIDEO?(a.width=!1,a.height=!1,a.poster=!1,f.transcoding?a.urlmimetype="video/mp4":a.urlmimetype=u,c=l.HTML_MEDIA.VIDEO):(a.width=!1,a.height=!1,a.poster=!1,f.transcoding?a.urlmimetype="audio/mp3":a.urlmimetype=u,c=l.HTML_MEDIA.AUDIO);break;case i.LINK:default:}var h=e.Handlebars.compile(c)(a),p=this.get("host");p.focus(),p.setSelection(this._currentSelection),p.insertContentAtFocusPoint(h),this.markUpdated()}},{ATTRS:{disabled:{value:!1}}})},"@VERSION@");
