define([],function(){function t(t){this.model=t,(this.isKO=Boolean(t.ko))&&(this.ko=t.ko)}return t.prototype={get:function(t,i){return t?this.isKO&&!i&&this.ko.isObservable(this.model[t])?this.ko.toJS(this.model[t]()):this.model[t]:this.model},set:function(t,i){return t?this.isKO&&this.ko.isObservable(this.model[t])?this.model[t](i):this.model[t]=i:!1}},t});
//# sourceMappingURL=util.model.js.map
/*
     FILE ARCHIVED ON 22:35:49 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:20 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 62.784 (3)
  esindex: 0.019
  captures_list: 87.719
  CDXLines.iter: 14.673 (3)
  PetaboxLoader3.datanode: 184.284 (5)
  exclusion.robots: 0.172
  exclusion.robots.policy: 0.159
  RedisCDXSource: 1.52
  PetaboxLoader3.resolve: 65.293 (2)
  load_resource: 200.245
*/