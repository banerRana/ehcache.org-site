var pairs =
{
"example":{"web.xml":1}
,"web.xml":{"configuration":1}
,"configuration":{"following":1,"file":1}
,"following":{"sample":1}
,"sample":{"web.xml":1}
,"file":{"<web-app":1,"matching":1}
,"<web-app":{"xmlns=\u0022":1}
,"xmlns=\u0022":{"http:\u002F\u002Fjava.sun.com\u002Fxml\u002Fns\u002Fjavaee":1}
,"http:\u002F\u002Fjava.sun.com\u002Fxml\u002Fns\u002Fjavaee":{"xmlns:xsi=\u0022":1,"version=\u0022":1}
,"xmlns:xsi=\u0022":{"http:\u002F\u002Fwww.w3.org\u002F2001\u002Fxmlschema-instance":1}
,"http:\u002F\u002Fwww.w3.org\u002F2001\u002Fxmlschema-instance":{"xsi:schemalocation=\u0022":1,"xsi:nonamespaceschemalocation=\u0022":1}
,"xsi:schemalocation=\u0022":{"http:\u002F\u002Fjava.sun.com\u002Fxml\u002Fns\u002Fjavaee":1}
,"version=\u0022":{"2.5":1}
,"2.5":{"<filter>":1}
,"<filter>":{"<filter-name>":1}
,"<filter-name>":{"cachepage1cachingfilter":1,"simplepagefragmentcachingfilter":1,"simplecachingheaderspagecachingfilter":1}
,"cachepage1cachingfilter":{"<\u002Ffilter-name>":1,"<\u002Fparam-value>":1,"maxentrieslocalheap=\u0022":1}
,"<\u002Ffilter-name>":{"<filter-class>":1,"<url-pattern>\u002Fcachedpage.jsp":1,"<url-pattern>\u002Finclude\u002Ffooter.jsp":1,"<url-pattern>\u002Ffragment\u002Fcachedfragment.jsp":1,"<url-pattern>\u002Fcachedpage2.jsp":1}
,"<filter-class>":{"net.sf.ehcache.constructs.web.filter.simplepagecachingfilter":1,"net.sf.ehcache.constructs.web.filter.simplepagefragmentcachingfilter":1,"net.sf.ehcache.constructs.web.filter.simplecachingheaderspagecachingfilter":1}
,"net.sf.ehcache.constructs.web.filter.simplepagecachingfilter":{"<\u002Ffilter-class>":1}
,"<\u002Ffilter-class>":{"<init-param>":1}
,"<init-param>":{"<param-name>":1}
,"<param-name>":{"suppressstacktrace":1,"cachename":1}
,"suppressstacktrace":{"<\u002Fparam-name>":1}
,"<\u002Fparam-name>":{"<param-value>":1}
,"<param-value>":{"false":1,"cachepage1cachingfilter":1,"simplepagefragmentcachingfilter":1,"cachedpage2cache":1}
,"false":{"<\u002Fparam-value>":1,"timetoidleseconds=\u0022":1,"timetoliveseconds=\u0022":1}
,"<\u002Fparam-value>":{"<\u002Finit-param>":1}
,"<\u002Finit-param>":{"<init-param>":1,"<\u002Ffilter>":1}
,"cachename":{"<\u002Fparam-name>":1}
,"<\u002Ffilter>":{"<filter>":1,"<!--this":1}
,"simplepagefragmentcachingfilter":{"<\u002Ffilter-name>":1,"<\u002Fparam-value>":1,"maxentrieslocalheap=\u0022":1}
,"net.sf.ehcache.constructs.web.filter.simplepagefragmentcachingfilter":{"<\u002Ffilter-class>":1}
,"simplecachingheaderspagecachingfilter":{"<\u002Ffilter-name>":1}
,"net.sf.ehcache.constructs.web.filter.simplecachingheaderspagecachingfilter":{"<\u002Ffilter-class>":1}
,"cachedpage2cache":{"<\u002Fparam-value>":1,"maxentrieslocalheap=\u0022":1}
,"<!--this":{"filter":1}
,"filter":{"chain":1}
,"chain":{"executed":1}
,"executed":{"order":1}
,"order":{"below":1,"-->":1}
,"below":{"change":1}
,"change":{"order":1}
,"-->":{"<filter-mapping>":1,"<cache":1}
,"<filter-mapping>":{"<filter-name>":1}
,"<url-pattern>\u002Fcachedpage.jsp":{"<\u002Furl-pattern>":1}
,"<\u002Furl-pattern>":{"<dispatcher>":1,"<\u002Ffilter-mapping>":1}
,"<dispatcher>":{"request":1,"include":1,"forward":1}
,"request":{"<\u002Fdispatcher>":1}
,"<\u002Fdispatcher>":{"<dispatcher>":1,"<\u002Ffilter-mapping>":1}
,"include":{"<\u002Fdispatcher>":1}
,"forward":{"<\u002Fdispatcher>":1}
,"<\u002Ffilter-mapping>":{"<filter-mapping>":1,"ehcache.xml":1}
,"<url-pattern>\u002Finclude\u002Ffooter.jsp":{"<\u002Furl-pattern>":1}
,"<url-pattern>\u002Ffragment\u002Fcachedfragment.jsp":{"<\u002Furl-pattern>":1}
,"<url-pattern>\u002Fcachedpage2.jsp":{"<\u002Furl-pattern>":1}
,"ehcache.xml":{"configuration":1}
,"matching":{"above":1}
,"above":{"<ehcache":1}
,"<ehcache":{"xmlns:xsi=\u0022":1}
,"xsi:nonamespaceschemalocation=\u0022":{".\u002Fmain\u002Fconfig\u002Fehcache.xsd":1}
,".\u002Fmain\u002Fconfig\u002Fehcache.xsd":{"<diskstore":1}
,"<diskstore":{"path=\u0022":1}
,"path=\u0022":{"auto\u002Fdefault\u002Fpath":1}
,"auto\u002Fdefault\u002Fpath":{"\u0022\u002F>":1}
,"\u0022\u002F>":{"<defaultcache":1,"<!--page":1,"<\u002Fcache>":1}
,"<defaultcache":{"maxentrieslocalheap=\u0022":1}
,"maxentrieslocalheap=\u0022":{"eternal=\u0022":1}
,"eternal=\u0022":{"false":1}
,"timetoidleseconds=\u0022":{"timetoliveseconds=\u0022":1,"10000":1}
,"timetoliveseconds=\u0022":{"<persistence":1,"10000":1,"3600":1}
,"<persistence":{"strategy=\u0022":1}
,"strategy=\u0022":{"localtempswap":1}
,"localtempswap":{"\u0022\u002F>":1}
,"<!--page":{"page":1}
,"page":{"fragment":1}
,"fragment":{"caches":1}
,"caches":{"-->":1}
,"<cache":{"name=\u0022":1}
,"name=\u0022":{"cachepage1cachingfilter":1,"cachedpage2cache":1,"simplepagefragmentcachingfilter":1,"simplecachingheaderstimeoutpagecachingfilter":1}
,"10000":{"timetoliveseconds=\u0022":1,"<persistence":1}
,"<\u002Fcache>":{"<cache":1,"<\u002Fehcache>":1}
,"3600":{"<persistence":1}
,"simplecachingheaderstimeoutpagecachingfilter":{"maxentrieslocalheap=\u0022":1}
}
;Search.control.loadWordPairs(pairs);
