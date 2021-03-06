import React from "react";
import DownloadShare from "../download/DownloadShare";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";

const LatestNews = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="latest_news_details">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="news_title">WikiCamps: Worth A Try</h1>
            <p>
              There are almost as many travel apps out there as there are travel
              destinations. In general, they all do some things well, and some
              things not so well. WikiCamps is certainly in the same, erm, camp.
              With a focus on – you guessed it – camping, the app can help you
              find nearby places to pitch your tent, park your RV, or take in
              some local sites. And while it can certainly be helpful, the app
              also suffers from so not-so-great features that might make it not
              worth paying to own it.
            </p>
            <h1>Free Trial</h1>
            <p>
              Like many apps, WikiCamps comes with a 14-day free trial. After
              that, it costs a one-time payment of $1.99 for lifetime access.
              The free trial period is well worth it because you can try out
              different destinations to see just how well it will work for you.
              Many users report a lack of data on local attractions and
              campsites, while our tests were data rich, so it might just depend
              on where you’re looking. It seems WikiCamps has a strong following
              in Australia, so the crowd-sourced information it relies on might
              just take some time to fill in around the rest of the world.
            </p>
            <h1>Smart Features</h1>
            <p>
              Beyond the actual data it contains (or doesn’t contain), WikiCamps
              has a wealth of smart features. Tap the hamburger button in the
              top-left of the screen, and you’re presented with a list of nearby
              attractions, campgrounds, hotels and more. Or you can enter a
              destination to see what might be in the area where you intend to
              travel.
            </p>
            <p>
              Tap on any one attraction and, if available, you’ll find contact
              details, photos, web links, user ratings and a mapping button that
              lets you load directions into your favorite mapping app such as
              Wayze, Google Maps or TomTom Go. You also get a week-long weather
              forecast for the site. Plus, because this is a Wiki built by
              members, you can edit the site if you notice that something is
              wrong or if you want to add additional information or photos, and
              you can also leave and read reviews from other users.
            </p>
            <p>
              A filter button lets you sort sites according to what you’re
              looking for and helps clear the clutter. You can for example,
              switch the toggles to include only free campgrounds that accept
              pets and have water facilities. You can see results either on the
              map or the list. One unfortunate thing is that the app seems to
              use Google Maps, so you wind up seeing all of the destinations
              that Google provides, but they aren’t all clickable so things can
              get a bit confusing.
            </p>
            <p>
              Like many apps, WikiCamps comes with a 14-day free trial. After
              that, it costs a one-time payment of $1.99 for lifetime access.
              The free trial period is well worth it because you can try out
              different destinations to see just how well it will work for you.
              Many users report a lack of data on local attractions and
              campsites, while our tests were data rich, so it might just depend
              on where you’re looking. It seems WikiCamps has a strong following
              in Australia, so the crowd-sourced information it relies on might
              just take some time to fill in around the rest of the world.
            </p>
            <h1>Trip Planning</h1>
            <p>
              While the app offers a trip-planning function, we found it
              difficult and confusing to use. You can search on your
              destination, but there seems to be no easy way to indicate that
              you want to add it as the end point in your trip. Instead, you can
              try to build a trip by tapping on sites and tapping “Add To
              Planner,” but it’s a cumbersome way to go about things.
            </p>
            <h1>Worth A Try?</h1>
            <p>
              Because WikiTrips is built by the community, it can be hit or miss
              in terms of the information it provides. Some spots have lots of
              entries, while others are fairly bare. And the Trip Planner
              doesn’t seem to have much utility. But, for just $1.99 it might be
              a worthwhile tool to add to a frequent-camper’s resources, and
              it’s certainly worth taking the two-week free trial out for a
              spin.
            </p>
            <DownloadShare border="none" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LatestNews;
