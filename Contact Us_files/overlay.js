google.maps.__gjsload__('overlay', function(_){var eu=_.oa("j"),fu=_.l(),gu=function(a){a.hg=a.hg||new fu;return a.hg},hu=function(a){this.V=new _.og(function(){var b=a.hg;if(a.getPanes()){if(a.getProjection()){if(!b.j&&a.onAdd)a.onAdd();b.j=!0;a.draw()}}else{if(b.j)if(a.onRemove)a.onRemove();else a.remove();b.j=!1}},0)},iu=function(a,b){function c(){return _.pg(e.V)}var d=gu(a),e=d.Ie;e||(e=d.Ie=new hu(a));_.C(d.X||[],_.S.removeListener);var f=d.ca=d.ca||new _.Gl,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.di=d.di||new eu(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.X=[_.S.addListener(a,"panes_changed",c),_.S.addListener(g,"zoom_changed",c),_.S.addListener(g,"offset_changed",c),_.S.addListener(b,"projection_changed",c),_.S.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.ke&&(_.sm(b,"Ox"),_.um("Ox","-p",a))},
lu=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.og()}if(b&&b instanceof _.ke){var d=b.__gm;d.overlayLayer?a.__gmop=new ju(b,a,d.overlayLayer):d.j.then(function(c){c=c.qa;var e=new ku(b,c);c.ra(e);d.overlayLayer=e;lu(a)})}}},ju=function(a,b,c){this.map=a;this.na=b;this.em=c;this.ve=!1;_.sm(this.map,"Ox");_.um("Ox","-p",this.na);c.l.push(this);c.j&&mu(this,c.j);c.m.Zf()},mu=function(a,b){a.na.get("projection")!=b&&(a.na.bindTo("panes",a.map.__gm),a.na.set("projection",
b))},ku=function(a,b){this.A=a;this.m=b;this.j=null;this.l=[]};_.A(eu,_.T);eu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.L(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.A(hu,_.T);ju.prototype.draw=function(){this.ve||(this.ve=!0,this.na.onAdd&&this.na.onAdd());this.na.draw&&this.na.draw()};ju.prototype.og=function(){_.vm("Ox","-p",this.na);this.na.unbindAll();this.na.set("panes",null);this.na.set("projection",null);_.db(this.em.l,this);this.ve&&(this.ve=!1,this.na.onRemove?this.na.onRemove():this.na.remove())};ku.prototype.dispose=_.l();
ku.prototype.Oa=function(a,b,c,d,e,f){var g=this.j=this.j||new _.hm(this.A,this.m,_.l());g.Oa(a,b,c,d,e,f);a=_.ua(this.l);for(b=a.next();!b.done;b=a.next())b=b.value,mu(b,g),b.draw()};_.Pe("overlay",{Tg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.ke||a.__gmop)lu(a);else{b=a.getMap();var c=gu(a),d=c.xl;c.xl=b;d&&(c=gu(a),(d=c.ca)&&d.unbindAll(),(d=c.di)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.C(c.X,_.S.removeListener),c.X=null,c.Ie&&(c.Ie.V.Ma(),c.Ie=null),_.vm("Ox","-p",a));b&&iu(a,b)}}},preventMapHitsFrom:function(a){_.kn(a,{onClick:function(a){return _.Cm(a.event)},Ia:function(a){return _.zm(a)},ac:function(a){return _.Am(a)},Va:function(a){return _.Am(a)},
Ka:function(a){return _.Bm(a)}}).Bc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Bd);a.addEventListener("contextmenu",_.Bd);a.addEventListener("dblclick",_.Bd);a.addEventListener("mousedown",_.Bd);a.addEventListener("mousemove",_.Bd);a.addEventListener("MSPointerDown",_.Bd);a.addEventListener("pointerdown",_.Bd);a.addEventListener("touchstart",_.Bd);a.addEventListener("wheel",_.Bd)}});});

/*
     FILE ARCHIVED ON 13:27:12 Jan 07, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:27:15 Jan 07, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 73.687 (3)
  esindex: 0.013
  captures_list: 121.243
  CDXLines.iter: 13.226 (3)
  PetaboxLoader3.datanode: 71.932 (3)
  exclusion.robots: 0.224
  exclusion.robots.policy: 0.207
  RedisCDXSource: 5.069
  load_resource: 87.324
*/