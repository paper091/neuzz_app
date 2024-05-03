import React, { Component } from 'react'

export default class NewsItem extends Component {

  articles = [
      {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Zachary Shahan",
      "title": "Pros & Cons of Tesla Supercharging Changes - CleanTechnica",
      "description": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News! As you’ve surely heard, Tesla has laid off 500 employees in the Supercharging division, the majority of its Supercharger team. Upon the sudden news, various reasons were …",
      "url": "https://cleantechnica.com/2024/05/02/pros-cons-of-tesla-supercharging-changes/",
      "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/04/Tesla-location-service-fleet-Supercharger-growth-logo-copy.png",
      "publishedAt": "2024-05-03T04:41:27Z",
      "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAs you’ve surely heard, Tesla has laid off 500 employees in the Supercharging division, the majority of its S… [+7487 chars]"
      },
      {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "By Chandelis Duster, Ramishah Maruf, Rachel Ramirez, Holly Yan, Samantha Delouya, Tori B. Powell and Aditi Sangal, CNN",
      "title": "President Biden weighs in on protests disrupting colleges across the US - CNN",
      "description": "Police are cracking down on protests against Israel's bombardment of Gaza at campuses across the US. Follow for live updates.",
      "url": "https://www.cnn.com/business/live-news/university-protests-pro-palestinian-israel-05-02-24/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240502122213-rally-ucla-050124-super-tease.jpg",
      "publishedAt": "2024-05-03T04:02:00Z",
      "content": "Several dozen men dressed in black with white masks repeatedly attacked UCLA's pro-Palestinian protest encampment late Tuesday with crude weapons, including poles and incendiaries, according to video… [+1637 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Jack Baer",
      "title": "NBA Playoffs: Knicks advance past Sixers behind Jalen Brunson's 41 points - Yahoo Sports",
      "description": "It was Brunson's third straight 40-point game.",
      "url": "https://sports.yahoo.com/nba-playoffs-knicks-advance-past-sixers-as-jalen-brunson-does-something-not-seen-since-michael-jordan-034250726.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zk1MXd2LIaO5eL6KtakvuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/d61971e0-08fb-11ef-bfbb-685c31d01628",
      "publishedAt": "2024-05-03T04:00:00Z",
      "content": "The New York Knicks advanced past the Philadelphia 76ers on Thursday, and they can primarily thank another signature performance from Jalen Brunson.\r\nThe All-Star point guard led his team to a 118-11… [+2688 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "The Indianapolis Star"
      },
      "author": "Scott Horner",
      "title": "Everything you need to know about Pacers vs. Knicks in the playoffs - IndyStar",
      "description": "The Pacers and Knicks split 6 spirited playoff series between 1993-2000. Get ready for more.",
      "url": "https://www.indystar.com/story/sports/nba/pacers/2024/05/02/everything-you-need-to-know-about-pacers-vs-knicks-in-the-playoffs/73518430007/",
      "urlToImage": "https://www.indystar.com/gcdn/authoring/authoring-images/2024/05/01/PIND/73519993007-pacers-knicks-inins-201.jpg?crop=1987,1119,x0,y39&width=1987&height=1119&format=pjpg&auto=webp",
      "publishedAt": "2024-05-03T03:04:10Z",
      "content": "The Indiana Pacers and New York Knicks will meet in the 2024 Eastern Conference semifinals. The Knicks beat the Philadelphia 76ers in six games in the first round, while the Pacers knocked off the Mi… [+5066 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "Entertainment Tonight"
      },
      "author": "Miguel A. Melendez",
      "title": "Britney Spears Exits Chateau Marmont With Friends After Ambulance Called to Hotel - Entertainment Tonight",
      "description": "The pop star left the famed West Hollywood hotel Chateau Marmont on Wednesday night wrapped in a blanket and holding a pillow.",
      "url": "https://www.etonline.com/britney-spears-exits-chateau-marmont-with-friends-after-ambulance-called-to-hotel-224589",
      "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-05/MK-Britney-Spears-1280-X-720-HERO-1-IMAGE.jpg?h=40a63981",
      "publishedAt": "2024-05-03T02:21:00Z",
      "content": "Britney Spears is sparking new concerns over her well-being after she was photographed leaving a famed West Hollywood hotel.\r\nThe 42-year-old pop star was spotted late Wednesday night leaving the Cha… [+5054 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "Suntimes.com"
      },
      "author": "Richard Roeper",
      "title": "Jerry Seinfeld's 'Unfrosted' one of the decade's worst movies - Chicago Sun-Times",
      "description": "Inspired by Pop-Tarts, Netflix comedy serves jokes that are just as weird and flat",
      "url": "https://chicago.suntimes.com/movies-and-tv/2024/05/02/unfrosted-review-netflix-jerry-seinfeld-pop-tart-movie",
      "urlToImage": "https://cst.brightspotcdn.com/dims4/default/fcca29f/2147483647/strip/true/crop/6820x3893+82+0/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F9f%2F9d%2Fbf132c2a4a2887ae30b90f5520a7%2Funfrosted-00-58-20-07-r.JPG",
      "publishedAt": "2024-05-03T02:14:00Z",
      "content": "We experienced an explosion of Corporate Origin Story movies in 2023, from the four-star titles Air and Blackberry to the creative and inventive Tetris and the appropriately silly and funny The Beani… [+4863 chars]"
      },
      {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Bench players Obi Toppin, T.J. McConnell lead Pacers into semis - ESPN",
      "description": "Obi Toppin scored 21 points, T.J. McConnell had 20 points and nine assists and the Pacers won a playoff series for the first time in a decade, beating the Bucks 120-98 in Game 6.",
      "url": "https://www.espn.com/nba/story/_/id/40072483/bench-players-obi-toppin-tj-mcconnell-lead-pacers-semis",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0503%2Fr1327768_1296x729_16%2D9.jpg",
      "publishedAt": "2024-05-03T01:29:00Z",
      "content": "INDIANAPOLIS -- Obi Toppin scored 21 points, T.J. McConnell had 20 points and nine assists and the Indiana Pacers won a playoff series for the first time in a decade, beating the Milwaukee Bucks120-9… [+3217 chars]"
      },
      {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Becky Anderson, Mostafa Salem, Jennifer Hansler",
      "title": "‘None go forward without the others.’ US mega-deal would tie together the futures of Saudi Arabia, Israel and Gaza - CNN",
      "description": "Saudi Arabia and the United States are finalizing the details of a landmark deal to strengthen bilateral trade and defense – but an agreement will not be reached if the kingdom and Israel do not establish diplomatic relations, US officials said.",
      "url": "https://www.cnn.com/2024/05/02/middleeast/us-saudi-treaty-israel-palestinian-statehood-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-04-29t112023z-1085836804-rc28g7aaw443-rtrmadp-3-israel-palestinians-blinken-gcc.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-05-03T01:23:00Z",
      "content": "Saudi Arabia and the United States are finalizing the details of a landmark deal to strengthen bilateral trade and defense but an agreement will not be reached if the kingdom and Israel do not establ… [+8086 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Kif Leswing",
      "title": "Apple's falling iPhone sales don't bother Wall Street so long as margins, buybacks are increasing - CNBC",
      "description": "Apple shares jumped after the company's earnings report on Thursday even though iPhone sales dropped more than expected.",
      "url": "https://www.cnbc.com/2024/05/02/apples-falling-iphone-sales-not-a-problem-as-margins-buybacks-grow.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107409760-1714683259133-gettyimages-1980125871-_s1_6160_kqcjkjrg.jpeg?v=1714683304&w=1920&h=1080",
      "publishedAt": "2024-05-03T01:10:00Z",
      "content": "A 10% decline in iPhone sales sounds like a problem for Apple, considering the company counts on the devices for half its revenue.\r\nBut investors didn't seem to mind on Thursday, when Apple revealed … [+3752 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
      },
      {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "POLITICO",
      "title": "Shake-down allegations and another contempt hearing highlight 10th day of Trump's trial - POLITICO",
      "description": null,
      "url": "https://www.politico.com/news/2024/05/02/trump-hush-money-trial-day-10-00155912",
      "urlToImage": null,
      "publishedAt": "2024-05-03T00:55:07Z",
      "content": null
      },
      {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "BASSEM MROUE, LEE KEATH, SAM MEDNICK",
      "title": "Hamas is sending a delegation to Egypt for further cease-fire talks in the latest sign of progress - The Associated Press",
      "description": "Hamas says it's sending a delegation to Egypt as soon as possible to continue talks in the latest sign of progress in the fragile cease-fire process. The group’s supreme leader Ismail Haniyeh said Thursday he had spoken to Egypt’s intelligence chief and Hamas…",
      "url": "https://apnews.com/article/israel-hamas-war-news-05-02-2024-0699ef663cba7318c375c0ee5bbf20ae",
      "urlToImage": "https://dims.apnews.com/dims4/default/44a370e/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F39%2Ff8%2F89c9de0a3e3adc35064731a54076%2F7fd873ff85f8429bb8fccd0ca125ecf5",
      "publishedAt": "2024-05-03T00:36:00Z",
      "content": "BEIRUT (AP) Hamas said Thursday that it was sending a delegation to Egypt for further cease-fire talks, in a new sign of progress in attempts by international mediators to hammer out an agreement bet… [+6041 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
      },
      {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "Apple iPad event: What to expect - TechCrunch",
      "description": "So far, the biggest surprise about May 7’s “Let Loose” event is that it’s happening at all. We’re just over a month out from Apple’s annual Worldwide",
      "url": "https://techcrunch.com/2024/05/02/apple-ipad-event-what-to-expect/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/AppleEvent.SEP14Keynote.Tim_Cook.04.jpg?resize=1200,800",
      "publishedAt": "2024-05-02T22:12:40Z",
      "content": "So far, the biggest surprise about May 7s Let Loose event is that its happening at all. Were just over a month out from Apples annual Worldwide Developer Conference, and yet the company determined th… [+3385 chars]"
      },
      {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Niamh Rowe",
      "title": "Coinbase revenue soars by 72% to $1.6 billion, smashing analysts' predictions - Fortune",
      "description": "The increase was fueled by a boost in consumer and institutional transactions, the result of favorable conditions in the wider cryptocurrency market.",
      "url": "https://fortune.com/crypto/2024/05/02/coinbase-q1-earnings-smash-expectations/",
      "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/05/GettyImages-1144022597-e1714672202720.jpg?resize=1200,600",
      "publishedAt": "2024-05-02T22:06:00Z",
      "content": "The largest U.S. cryptocurrency exchange posted first-quarter revenue of $1.6 billion, a 72% increase quarter on quarter. Reported net income for Coinbase was $1.18 billion (or$4.40 per share) and wa… [+2972 chars]"
      },
      {
      "source": {
        "id": null,
        "name": "KTRK-TV"
      },
      "author": null,
      "title": "Lake Conroe water level: Residents south of dam near San Jacinto River told to prepare for potential significant flooding - KTRK-TV",
      "description": "Montgomery County officials said residents south of the Lake Conroe Dam near the San Jacinto River should prepare for potential significant flooding.",
      "url": "https://abc13.com/lake-conroe-water-level-today-san-jacinto-river-flooding-dam-release-abc13-weather-alert-day/14755225/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14757205_050224-ktrk-wx-flooding-rescue-boat-img.png?w=1600",
      "publishedAt": "2024-05-02T22:01:04Z",
      "content": "MONTGOMERY COUNTY, Texas (KTRK) -- As coverage continues on severe storms rolling through our area, ABC13 has learned that Lake Livingston is now releasing 124,000 cubic feet of water per second, acc… [+4051 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hollywood Reporter"
      },
      "author": "James Hibberd",
      "title": "Anya Taylor-Joy Wears Transparent Gold Dress With Giant Spikes to 'Furiosa' Premiere - Hollywood Reporter",
      "description": "The 'Mad Max' prequel star looked downright dangerous at the film's Australia premiere.",
      "url": "http://www.hollywoodreporter.com/movies/movie-news/anya-taylor-joy-transparent-gold-dress-spike-furiosa-premiere-1235889170/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/GettyImages-2151088695-H-2024.jpg?w=1024",
      "publishedAt": "2024-05-02T21:55:28Z",
      "content": "Look, but definitely do not touch. \r\nAnya Taylor-Joy rocked a dramatic transparent gold dress covered in giant spikes at the Furiosa premiere in Sydney, Australia, on Thursday. \r\nThe 28-year-old star… [+962 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "MICHAEL R. SISAK, PHILIP MARCELO, ERIC TUCKER, JAKE OFFENHARTZ",
      "title": "Hush money trial: Trump faces prospect of additional sanctions for violating gag order - The Associated Press",
      "description": "Jurors in the hush money trial of Donald Trump have heard a recording of him discussing with his then-lawyer and personal fixer a plan to purchase the silence of a Playboy model who has said she had an affair with the former president. A visibly irritated Tru…",
      "url": "https://apnews.com/article/hush-money-trial-new-fines-testimony-trump-fe6995afbc96650b67f46d813ab05f06",
      "urlToImage": "https://dims.apnews.com/dims4/default/28ef091/2147483647/strip/true/crop/4240x2385+0+224/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc1%2Fbd%2Fdfbb80f896ee4d55d9a71cee4ec1%2F4f8e13db87b041beb6b8a9ad343505e9",
      "publishedAt": "2024-05-02T21:32:00Z",
      "content": "NEW YORK (AP) Jurors in the hush money trial of Donald Trump heard a recording Thursday of him discussing with his then-lawyer and personal fixer a plan to purchase the silence of a Playboy model who… [+7880 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": null,
      "title": "North Carolina candidate for Congress suspends campaign days before primary runoff after Trump weighs in - CBS News",
      "description": "Just before the primary runoff election, the GOP candidate with the most votes in the primary for a North Carolina congressional seat said she's suspending her campaign.",
      "url": "https://www.cbsnews.com/news/north-carolina-congressional-candidate-suspends-campaign-before-runoff/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/02/68cc19ea-25d1-43d3-8dba-c7187a902d1c/thumbnail/1200x630g2/6c0e321b9c097809ad2914971b4cd59e/screenshot-2024-05-02-at-5-24-25-pm.png?v=1d6c78a71b7b6252b543a329b3a5744d",
      "publishedAt": "2024-05-02T21:28:41Z",
      "content": "The candidate who finished first in the Republican nomination primary race for a North Carolina congressional seat says she's suspending her campaign, citing her rival's endorsement by former Preside… [+2466 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "247Sports"
      },
      "author": "Grant Hughes",
      "title": "College basketball transfer portal: Where UNC, Duke, Kentucky, Arkansas rosters stand after window closure - 247Sports",
      "description": "How some of the nations biggest programs are piecing together their 202425 rosters through the portal",
      "url": "https://247sports.com/longformarticle/college-basketball-transfer-portal-where-unc-duke-kentucky-arkansas-rosters-stand-after-window-closure-231321599/",
      "urlToImage": "https://s3media.247sports.com/Uploads/Assets/528/389/12389528.jpeg?width=1200&height=628&crop=1.91:1&fit=cover",
      "publishedAt": "2024-05-02T21:00:00Z",
      "content": "The college basketball transfer portal closed this week, and though movement is far from over, rosters for some of the nation's top programs have come into focus. The 247Sports duo of director of sco… [+1186 chars]"
      }
      ]
      
  constructor() {
    super();
    this.state={
      articles: this.articles,
    }
  }

  render() {

    let {title, description, imgUrl} = this.props;

    return (
      <>
        {/* <p>This is a news item</p> */}
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="superbiker"></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </>
    )
  }
}
