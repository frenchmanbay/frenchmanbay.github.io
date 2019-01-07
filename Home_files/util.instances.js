define([],function(){function t(t,n){this.name=t,this.Module=n,this.instances={},this.instanceNum=0}return t.prototype={create:function(t,n){return t.length&&!this.get(t)?this.instances[(n=n||{}).instanceId=++this.instanceNum]=new this.Module(t.data(this.name+"-instance",this.instanceNum),n):!1},get:function(t){return t.length?this.instances[t.data(this.name+"-instance")]:!1},destroy:function(t){var n=this.get(t);return n?(delete this.instances[n.model&&n.model.get?n.model.get("instanceId"):n.options.instanceId],!0):!1}},t});
//# sourceMappingURL=util.instances.js.map
/*
     FILE ARCHIVED ON 22:35:49 Jan 13, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:32:20 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 38.762 (3)
  esindex: 0.006
  captures_list: 78.008
  CDXLines.iter: 16.017 (3)
  PetaboxLoader3.datanode: 95.245 (5)
  exclusion.robots: 0.219
  exclusion.robots.policy: 0.192
  RedisCDXSource: 18.667
  PetaboxLoader3.resolve: 95.885 (2)
  load_resource: 248.776
*/