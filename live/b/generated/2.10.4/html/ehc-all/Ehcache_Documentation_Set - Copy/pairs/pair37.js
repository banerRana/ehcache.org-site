var pairs =
{
"cache-as-sor":{"cache-as-sor":1,"pattern":1,"example":1}
,"pattern":{"implies":1,"delegates":1,"combination":1,"less":1}
,"implies":{"using":1}
,"using":{"cache":1,"cache-as-sor":1}
,"cache":{"primary":1,"application":1,"solve":1,"public":1,"treated":1,"provide":1}
,"primary":{"system-of-record":1}
,"system-of-record":{"(sor)":1}
,"(sor)":{"pattern":1}
,"delegates":{"sor":1}
,"sor":{"reading":1,"*the":1,"*\u002Fpublic":1}
,"reading":{"writing":1}
,"writing":{"activities":1}
,"activities":{"cache":1}
,"application":{"code":1}
,"code":{"absolved":1,"(improved":1,"simply":1}
,"absolved":{"responsibility":1}
,"responsibility":{"implement":1,"write":1}
,"implement":{"cache-as-sor":1}
,"combination":{"following":1}
,"following":{"read":1}
,"read":{"write":1}
,"write":{"patterns":1,"data":1,"(element":1}
,"patterns":{"read-through":1}
,"read-through":{"write-through":1,"strategy":1}
,"write-through":{"write-behind":1}
,"write-behind":{"advantages":1,"strategies":1,"strategy":1}
,"advantages":{"using":1}
,"less":{"cluttered":1,"directly":1}
,"cluttered":{"application":1}
,"(improved":{"maintainability)":1}
,"maintainability)":{"choice":1}
,"choice":{"write-through":1}
,"strategies":{"per-cache":1}
,"per-cache":{"basis":1}
,"basis":{"(use":1}
,"(use":{"configuration)":1}
,"configuration)":{"allows":1}
,"allows":{"cache":1}
,"solve":{"thundering-herd":1}
,"thundering-herd":{"problem":1}
,"problem":{"disadvantage":1}
,"disadvantage":{"using":1}
,"directly":{"visible":1}
,"visible":{"code-path":1}
,"code-path":{"cache-as-sor":1}
,"example":{"public":1}
,"public":{"class":1,"mydataaccessclass":1,"cachewriter":1,"void":1}
,"class":{"mydataaccessclass":1,"mycacheentryfactory":1,"mycachewriter":1}
,"mydataaccessclass":{"{private":1,"(ehcache":1}
,"{private":{"final":1}
,"final":{"ehcache":1}
,"ehcache":{"cache":1}
,"(ehcache":{"cache)":1}
,"cache)":{"{cache.registercachewriter":1,"throws":1}
,"{cache.registercachewriter":{"(new":1}
,"(new":{"mycachewriter":1,"element":1}
,"mycachewriter":{"())":1,"implements":1}
,"())":{"this.cache":1,"void":1}
,"this.cache":{"=new":1}
,"=new":{"selfpopulatingcache":1}
,"selfpopulatingcache":{"(cache)":1}
,"(cache)":{"\u002F*read":1}
,"\u002F*read":{"data":1}
,"data":{"-notice":1,"sor":1}
,"-notice":{"cache":1}
,"treated":{"sor":1}
,"*the":{"application":1,"cache\u0027s":1,"read-through":1,"write-through":1}
,"simply":{"assumes":1}
,"assumes":{"key":1}
,"key":{"always":1,"value)":1}
,"always":{"available":1}
,"available":{"*\u002Fpublic":1}
,"*\u002Fpublic":{"readsomedata":1,"void":1}
,"readsomedata":{"key)":1}
,"key)":{"{return":1,"throws":1}
,"{return":{"cache.get":1,"readdatafromdatastore":1}
,"cache.get":{"(key)":1}
,"(key)":{"\u002F*write":1,"\u002F***implement":1}
,"\u002F*write":{"data":1}
,"cache\u0027s":{"responsibility":1}
,"void":{"writesomedata":1,"init":1,"dispose":1,"write":1,"writeall":1,"delete":1,"deleteall":1}
,"writesomedata":{"key":1}
,"value)":{"{cache.put":1,"\u002F***implement":1}
,"{cache.put":{"(new":1}
,"element":{"(key":1,"elements)":1}
,"(key":{"value)":1}
,"\u002F***implement":{"cacheentryfactory":1,"cachewriter":1}
,"cacheentryfactory":{"allows":1,"{public":1}
,"provide":{"*the":1}
,"strategy":{"*\u002Fprivate":1}
,"*\u002Fprivate":{"class":1}
,"mycacheentryfactory":{"implements":1}
,"implements":{"cacheentryfactory":1,"cachewriter":1}
,"{public":{"object":1}
,"object":{"createentry":1}
,"createentry":{"(object":1}
,"(object":{"key)":1}
,"throws":{"exception":1,"clonenotsupportedexception":1,"cacheexception":1}
,"exception":{"{return":1}
,"readdatafromdatastore":{"(key)":1}
,"cachewriter":{"interface":1,"public":1,"clone":1}
,"interface":{"allows":1}
,"clone":{"(ehcache":1}
,"clonenotsupportedexception":{"{throw":1,"public":1}
,"{throw":{"new":1}
,"new":{"clonenotsupportedexception":1}
,"init":{"void":1}
,"dispose":{"throws":1}
,"cacheexception":{"void":1,"{writedatatodatastore":1,"{for":1,"{deletedatafromdatastore":1}
,"(element":{"element)":1,"element":1}
,"element)":{"throws":1}
,"{writedatatodatastore":{"(element.getkey":1}
,"(element.getkey":{"element.getvalue":1,"())":1}
,"element.getvalue":{"())":1}
,"writeall":{"(collection":1}
,"(collection":{"<element>":1,"<cacheentry>":1}
,"<element>":{"elements)":1}
,"elements)":{"throws":1,"{write":1,"{delete":1}
,"{for":{"(element":1}
,"{write":{"(element)":1}
,"(element)":{"void":1}
,"delete":{"(cacheentry":1}
,"(cacheentry":{"entry)":1}
,"entry)":{"throws":1}
,"{deletedatafromdatastore":{"(element.getkey":1}
,"deleteall":{"(collection":1}
,"<cacheentry>":{"entries)":1}
,"entries)":{"throws":1}
,"{delete":{"(element)":1}
}
;Search.control.loadWordPairs(pairs);
