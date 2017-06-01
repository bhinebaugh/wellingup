import { Injectable } from '@angular/core';

@Injectable()
export class NarrativeService {
	narrativePages: Array<any>;
	
	constructor() {
		this.narrativePages = [
			//"There is mystery", "Forgiveness", "Touch", "People in Jewel's life", "Rocco's story"	
			{id:1, slug:"/narrative/1", title:"There is mystery"},
			{id:2, slug:"/narrative/2", title:"Forgiveness"}
		
			// actual wp api response
			{
				"id":3,
				"date":"2017-05-31T19:45:35",
				"date_gmt":"2017-05-31T19:45:35",
				"guid":{"rendered":"http:\/\/localhost\/?p=4"},"modified":"2017-05-31T19:45:35","modified_gmt":"2017-05-31T19:45:35",
				//"slug":"there-is-mystery",
				"slug":"/narrative/3",
				"status":"publish","type":"post","link":"http:\/\/localhost\/2017\/05\/31\/there-is-mystery\/",
				"title":"\u201cThere Is Mystery\u201d",
				"content": "<p>[Friends Meeting at Cambridge, Easter Sunday, March, 1997]<\/p>\n<p>A young man Jewell never saw before rose to speak. \u201cNone of us really knows what happened on Easter,\u201d he began. Who was this Viking? His body, his voice, his authority filled the meetinghouse. Rooted on tree-trunk legs he looked down for a moment, then straightened, shoulders back, his long, rust-brown hair brushed back from a tanned, broad forehead. Squarely within himself, his grey eyes composed, he gloried in his physical presence, his body\u2019s perfect workings, its freedom from pain. Those rumpled chinos and kelly-green cotton sweater, its collar badly stretched, covered a body that worked. It would not betray him, not today, nor for a long, long time.<\/p>\n<p>\u201cEach of us may believe something quite different,\u201d The Viking continued. \u201cBut we do know this: there is mystery.\u201d<\/p>\n",
				"excerpt":{"rendered":"<p>[Friends Meeting at Cambridge, Easter Sunday, March, 1997] A young man Jewell never saw before rose to speak. \u201cNone of us really knows what happened on Easter,\u201d he began. Who was this Viking? His body, his voice, his authority filled the meetinghouse. Rooted on tree-trunk legs he looked down for a moment, then straightened, shoulders &hellip; <\/p>\n<p class=\"link-more\"><a href=\"http:\/\/localhost\/2017\/05\/31\/there-is-mystery\/\" class=\"more-link\">Continue reading<span class=\"screen-reader-text\"> &#8220;\u201cThere Is Mystery\u201d&#8221;<\/span><\/a><\/p>\n","protected":false},
				"author":1,"featured_media":0,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":[],
				"categories":[2],"tags":[],"_links":{"self":[{"href":"http:\/\/localhost\/wp-json\/wp\/v2\/posts\/4"}],
				"collection":[{"href":"http:\/\/localhost\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"http:\/\/localhost\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"http:\/\/localhost\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"http:\/\/localhost\/wp-json\/wp\/v2\/comments?post=4"}],"version-history":[{"href":"http:\/\/localhost\/wp-json\/wp\/v2\/posts\/4\/revisions"}],"wp:attachment":[{"href":"http:\/\/localhost\/wp-json\/wp\/v2\/media?parent=4"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"http:\/\/localhost\/wp-json\/wp\/v2\/categories?post=4"},{"taxonomy":"post_tag","embeddable":true,"href":"http:\/\/localhost\/wp-json\/wp\/v2\/tags?post=4"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}]
		]
	}
	
	getNarrativePages() {
		// http://localhost/wp-json/wp/v2/posts?categories=2
		return this.narrativePages	
	}
	getNarrativePage(id: number) {
		return new Array(this.narrativePages[id-1])
		//find this.narrativePages where id = id
	}
}