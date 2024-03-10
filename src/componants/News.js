import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const  News = (props) => {    
    const url=`https://newsapi.org/v2/top-headlines`

    const [articles,setArticles]= useState([])
    const [loading,setLoading]= useState(false)
    const [page,setPage]= useState(1)
    const [totalResults,setTotalResults]= useState(2)
    
    const updatenews = async ()=> {                
        setLoading(true);        
        setArticles([]);        
        
        let site_url = `${url}?country=${props.country}&category=${props.category}&pageSize=${props.pagesize}&apiKey=${props.apiKey}&page=${page}`        
        let res = await fetch(site_url)
        let parcedData = await res.json();                

        setArticles(parcedData.articles);
        setTotalResults(parcedData.totalResults);        
        // setArticles([{ "source": { "id": null, "name": "Slashdot.org" }, "author": "feedfeeder", "title": "Tesla simulation and video generation are the ‘best in the world’: Musk - TESLARATI", "description": "Tesla simulation and video generation are the ‘best in the world’: MuskTESLARATI OpenAI Unveils A.I. That Instantly Generates Eye-Popping VideosThe New York Times OpenAI's Video Competitors: Here Are The ChatGPT-Maker's Rivals After It Dropped SoraForbes Sam …", "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173099178", "urlToImage": null, "publishedAt": "2024-02-19T02:33:10Z", "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]" }, { "source": { "id": null, "name": "Freerepublic.com" }, "author": "Just the News", "title": "Elon Musk criticizes hormonal birth control", "description": "Tesla CEO Elon Musk criticized hormonal birth control and was met with stories from women about their personal experiences on the pill. \"Hormonal birth control makes you fat, doubles risk of depression & triples risk of suicide. This is the clear scientific c…", "url": "https://freerepublic.com/focus/f-news/4218362/posts", "urlToImage": null, "publishedAt": "2024-02-19T02:21:30Z", "content": "Skip to comments.\r\nElon Musk criticizes hormonal birth controlJust the News ^\r\n | February 18, 2024 4:25pm\r\n | Madeleine Hubbard\r\nPosted on 02/18/2024 6:21:30 PM PST by E. Pluribus Unum\r\nTesla CEO El… [+2218 chars]" }, { "source": { "id": null, "name": "New Zealand Herald" }, "author": null, "title": "Man stays in New York hotel for free for five years then refuses to leave", "description": "In a city famous for its insanely expensive rents, one man found a fortuitous loophole.", "url": "https://www.nzherald.co.nz/travel/man-stays-in-new-york-hotel-for-free-for-five-years-then-refuses-to-leave/ZZ6Q3EQ6EJHOTGGI72RV7MBWFY/", "urlToImage": "https://www.nzherald.co.nz/resizer/P5-aOb2BLjI2Si-ac0Wcgst87TQ=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/WNF7FOEHURESZPZCHQGUZIA6TE.jpg", "publishedAt": "2024-02-19T02:18:59Z", "content": "A man who succeeded in using a New York City housing law to live rent-free in an iconic hotel has been charged with fraud after he claimed to own it. Photo / UnsplashFor five years, a New York City m… [+3876 chars]" }, { "source": { "id": null, "name": "Elespanol.com" }, "author": "Ismael Marinero", "title": "El ingenioso invento para tener altavoces en el coche sin que se vean: así se integran en la moqueta y los asientos", "description": "El sistema Sonified, presentado en el CES 2024, permite decir adiós a los altavoces en las puertas y añadirlos en ubicaciones poco convencionales.", "url": "https://www.elespanol.com/omicrono/tecnologia/20240219/ingenioso-invento-tener-altavoces-coche-sin-vean-integran-moqueta-asientos/832667022_0.html", "urlToImage": "https://s1.elespanol.com/2024/02/15/omicrono/tecnologia/832926913_239981028_1706x960.jpg", "publishedAt": "2024-02-19T01:29:23Z", "content": "El diseño de los coches no deja de evolucionar. Los motores eléctricos, más ligeros y cada vez más pequeños hasta el punto de caber en las ruedas, representan una oportunidad para repensar por comple… [+6666 chars]" }, { "source": { "id": null, "name": "Thairath.co.th" }, "author": "Thairath", "title": "ขับดี มีความกว้างขวาง! สัมผัสแรก HYUNDAI IONIQ 5 EXCLUSIVE", "description": "ทดสอบ Ioniq 5 รุ่น Exclusive : 1,899,000 บาท มอเตอร์เดี่ยว ขับเคลื่อนล้อหลัง 217 แรงม้า 350 นิวตันเมตร 0-100 ใน 7.4 วินาที ความเร็วสูงสุด 185 กิโลเมตรต่อชั่วโมง ระบบชาร์จไฟ 800โวลต์ จาก 10% ไป 80% นาน 20 นาที ชาร์จเต็มวิ่งไกล 481 กิโลเมตร ราคา 1,899,000 บาท", "url": "https://www.thairath.co.th/news/auto/testdrive/2763943", "urlToImage": "https://static.thairath.co.th/media/H91oqYT7XIlBQF6neJtu9dbSwHYqqCeXkwZu1i6NEtmwOj7HrAFsTwhSC3M1FZ6TQkyiyw.jpg", "publishedAt": "2024-02-19T01:00:00Z", "content": "Ioniq Hyundai Ioniq  ion unique   Ioniq Hyundai Ioniq 2016 (2559) Ioniq 3 100% Ioniq 5 Hyundai  \r\nHyundai Ioniq 5 2021 Ioniq 5 1980 LED '' 'CUV' Hyundai Ioniq 5 4 Volvo C40 BMW iX3, Mercedes-Benz EQB… [+2041 chars]" }, { "source": { "id": null, "name": "Drive.com.au" }, "author": "Drive Team", "title": "More Australians open to electric cars, but still want SUVs and utes", "description": "A higher number of Australians are considering an electric car for their next new purchase, but the appetite remains for SUVs and pick-ups.", "url": "https://www.drive.com.au/news/more-australians-open-to-electric-cars-but-still-want-suvs-and-utes/", "urlToImage": "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/tany7akkdgvhp3twuhpi", "publishedAt": "2024-02-19T01:00:00Z", "content": "While there are a number of electric SUVs in showrooms from brands including Hyundai, Renault, Volvo, BMW, MG, BYD, Renault and Tesla there is only a single electric dual-cab ute the LDV eT60 priced … [+10 chars]" }, { "source": { "id": null, "name": "Debian.org" }, "author": null, "title": "Accepted 535.86.10-1 in experimental (medium) (Debian FTP Masters)", "description": "[2024-02-19] Accepted 535.86.10-1 in experimental (medium) (Debian FTP Masters)", "url": "https://packages.qa.debian.org/n/nvidia-graphics-drivers/news/20240219T000637Z.html", "urlToImage": null, "publishedAt": "2024-02-19T00:06:37Z", "content": "<ul><li>To: debian-experimental-changes@lists.debian.org, debian-devel-changes@lists.debian.org</li><li>Subject: Accepted nvidia-graphics-drivers 535.86.10-1 (source) into experimental</li><li>From: … [+5141 chars]" }, { "source": { "id": null, "name": "Www.hs.fi" }, "author": "Jose Riikonen", "title": "Sairaudet | Lapset ajavat pienillä Tesloilla sairaalassa Helsingissä – Taustalta paljastuu joviaali idea", "description": "Vapaaehtoiset veivät sairaalaan sähköautoja, jotta pienet potilaat eivät jäisi leikeistä paitsi.", "url": "https://www.hs.fi/kaupunki/art-2000010222432.html", "urlToImage": "https://hs.mediadelivery.fi/img/some/default/6ab3f19017a99f5bfc5ebe6725dd83f6.jpg", "publishedAt": "2024-02-19T00:02:00Z", "content": "Vapaaehtoiset veivät sairaalaan sähköautoja, jotta pienet potilaat eivät jäisi leikeistä paitsi.Parkissa on kaksi Teslaa, joita voisi kokeilla, mutta kuljettajakandidaattia jännittää.\r\nIsän rohkaisus… [+6542 chars]" }, { "source": { "id": "cbs-news", "name": "CBS News" }, "author": "Norah O'Donnell, Aliza Chasan", "title": "Navy three-star admiral discusses the mission to stop Houthi attacks", "description": "With backing from Iran, the Houthi militia in Yemen have kept up a barrage of attacks on ships in the Red Sea for months. The U.S. military is pushing back.", "url": "https://www.cbsnews.com/news/houthi-attacks-red-sea-us-navy-response-60-minutes/", "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/16/2a23e463-9558-482f-be48-8e90b45a1ffc/thumbnail/1200x630/75c57e6c7243119f1a49511df9d53b68/60-minutes-full-episode-02-18-24.jpg?v=2a01790210e495d24a119503c08f840d", "publishedAt": "2024-02-19T00:00:15Z", "content": "Vice Adm. Brad Cooper, deputy commander of U.S. Central Command, is warning that it would be unwise to think of the Houthis as a ragtag group. \r\nThough Yemen, where the Houthi militia is based, is th… [+6599 chars]" }, { "source": { "id": "cbs-news", "name": "CBS News" }, "author": "Norah O'Donnell", "title": "U.S. Navy destroyers target Houthi Red Sea missiles and drones", "description": "For months, the U.S. Navy has operated out of the Red Sea at a pace not seen in decades, as the military responds to Houthi targeting of commercial ships. Norah 'O'Donnell reports.", "url": "https://www.cbsnews.com/news/navy-counters-houthi-red-sea-attacks-in-its-first-major-battle-at-sea-of-21st-century-60-minutes-transcript/", "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/16/bf412d28-f99a-4c07-8d2c-381dc4a74c8e/thumbnail/1200x630/f8cfaafa83639fadfd6412e3ea68c65c/red-sea-video.jpg?v=2a01790210e495d24a119503c08f840d", "publishedAt": "2024-02-19T00:00:12Z", "content": "After Hamas launched its deadly terrorist attack in Israel this past October, and Israel began its unrelenting war in Gaza in response, President Biden warned Iran and its proxies in the Middle East … [+12338 chars]" }]);                
        // setTotalResults(articles.length);
        setLoading(false);

    }

    useEffect(()=>{
        document.title="News "+ props.category;
        updatenews()}
         // eslint-disable-line 
         ,[])
    
    
    const handlePrevClick = async () => {setPage(page-1); updatenews()    }
    const handleNextClick = async () => {setPage(page+1); updatenews()    }    
        return (
            <>
                <div className="container my-3">
                <div className="text-center"    >      
                    <h1 style={{marginTop:"60px"}}>Top HeadLines</h1></div>
                    {loading && <Spinner />}
                    <div className="row">
                        {!(loading) && articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.content ? element.content.slice(0, 40) + '...' : ""}
                                description={element.description ? element.description.slice(0, 90) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "/logo192.png"}
                                newsUrl={element.url}
                                publishedAt={element.publishedAt}
                                author={element.author}
                                source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}>&larr; previous</button>
                        <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}>{`${page} ${totalResults} ${Number(props.pagesize)}`}</button>
                        <button type="button" disabled={page > totalResults / Number(props.pagesize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )

}


News.defaultProps = {
    country: "in",
    pagesize: 1,    
    category: "general"
}
News.propsTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
}

export default News;