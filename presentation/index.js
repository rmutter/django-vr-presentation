// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  appStoreOne: require("../assets/appstore-1.png"),
  appStoreTwo: require("../assets/appstore-2.png"),
  appStoreThree: require("../assets/appstore-3.png"),
  appStoreFour: require("../assets/appstore-4.png"),
  appStoreFive: require("../assets/appstore-5.png"),
  crossPlatformVr: require("../assets/cross-platform-vr.jpg"),
  djangoPony: require("../assets/django-pony.png"),
  djangoRestFramework: require("../assets/django-rest-framework.gif"),
  googleCardboard: require("../assets/google-cardboard.jpg"),
  levelMakingOne: require("../assets/level-making-1.jpg"),
  levelMakingTwo: require("../assets/level-making-2.jpg"),
  levelMakingThree: require("../assets/level-making-3.jpg"),
  levelMakingFour: require("../assets/level-making-4.jpg"),
  reinventWheel: require("../assets/reinvent-wheel.jpg"),
  rudyMagic: require("../assets/rudy-magic.jpg"),
  samsungGear: require("../assets/samsung-gear.jpg"),
  sfDjango: require("../assets/django-sf.jpg"),
  stopSign: require("../assets/stop-sign.png"),
  sword: require("../assets/sword.png"),
  terminalIcon: require("../assets/terminal-icon.png"),
  thumbsUp: require("../assets/thumbs-up.png"),
  tinyEyeBranding: require("../assets/tiny-eye-branding.jpg"),
  titansOfSpace: require("../assets/titans-of-space.jpg"),
  unityDevelopment: require("../assets/unity-game-development.png"),
  unityEditorVr: require("../assets/unity-editor-vr.png"),
  yetiHead: require("../assets/yeti-head-white.png"),
  vrHeadsets: require("../assets/vr-headsets.jpg"),
  vrProfile: require("../assets/vr-profile.jpg"),
  vrPumpkin: require("../assets/vr-pumpkin.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#222",
  secondary: "#FFF",
  tertiary: "#42affa",
  quartenary: "#FFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="pacman">
          <Slide maxWidth={1250}>
            <Heading fit caps>
              DJANGO SUPPORTING VIRTUAL REALITY
            </Heading>
            <Text fontSize={1} fit caps textColor="secondary">
              GAME DEVELOPMENT
            </Text>
            <Layout>
              <Fill>
                <Image src={images.djangoPony.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
              <Fill>
                <Image src={images.unityDevelopment.replace("/", "")} margin="60px auto 0" height="300px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.rudyMagic.replace("/", "")} bgDarken={0.75} maxWidth={1250}>
            <Heading fit caps>
              Rudy Mutter
            </Heading>
            <List>
              <ListItem><Image src={images.yetiHead.replace("/", "")} margin="0" height="40px"/> Co-founder & Head of Tech @ Yeti</ListItem>
              <ListItem><Image src={images.sfDjango.replace("/", "")} margin="0" height="40px"/> Organizer of the SF Django Meetup</ListItem>
              <ListItem><Image src={images.terminalIcon.replace("/", "")} margin="0" height="40px"/> Polyglot Developer (Python, Swift, JavaScript, Java, C#)</ListItem>
              <ListItem><Image src={images.sword.replace("/", "")} margin="0" height="45px"/> Started with making RPG Maker games growing up</ListItem>
            </List>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Quick Intro
            </Heading>
            <Text textSize="4rem" caps textColor="secondary">
              Let's get some context.
            </Text>
            <Image src={images.yetiHead.replace("/", "")} margin="60px auto 0" height="300px"/>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              I'm Making a Game! 🎮
            </Heading>
            <Text textSize="4rem" caps textColor="secondary" margin="30px 0 0 0">
              How can I use my favorite tool, Django?
            </Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              What's Not in This Talk?
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.stopSign.replace("/", "")} margin="60px 60px 0" height="300px"/>
              </Fit>
              <Fill>
                <List padding="20px 0 0">
                  <ListItem>Unity 101</ListItem>
                  <ListItem>Django + Django Rest Framework 101</ListItem>
                  <ListItem>Build My First App Tutorial</ListItem>
                  <ListItem>* Resources Provided at the End</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              What Is In This Talk?
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Enough to Get Started w/ Unity + VR</ListItem>
                  <ListItem>Know where to look</ListItem>
                  <ListItem>Key insights integrating Django w/ Unity</ListItem>
                  <ListItem>Solutions for major pain points</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.thumbsUp.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text bold lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps textSize="6rem">
              Show of Hands ✋
            </Heading>
            <Text textSize="2rem" caps textColor="secondary" margin="40px 0 0 0">
              Who would say they're familiar with virtual reality and the different platforms?
            </Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Brief State of VR
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.vrHeadsets.replace("/", "")} margin="60px 0 0 0" height="200px"/>
              </Fill>
              <Fill>
                <Image src={images.googleCardboard.replace("/", "")} margin="60px 0 0 0" height="200px"/>
              </Fill>
              <Fill>
                <Image src={images.samsungGear.replace("/", "")} margin="60px 0 0 0" height="200px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              2016 - Year of VR
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.vrProfile.replace("/", "")} margin="60px 30px 0" height="300px"/>
              </Fit>
              <Fill>
                <List padding="20px 0 0">
                  <ListItem>Rift & Vive preorders shipped</ListItem>
                  <ListItem>Gear VR packaged with purchases</ListItem>
                  <ListItem>NYT sends subscribers Cardboards</ListItem>
                  <ListItem>Playstation VR Oct '16</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Desktop vs. Mobile
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Smartphone VR considered "VR Lite"</ListItem>
                  <ListItem>Google Cardboard rebranded Google VR *I'll refer to it as either</ListItem>
                  <ListItem>Screen door effect</ListItem>
                  <ListItem>Hardware, resolution, computing power</ListItem>
                  <ListItem>Mobile has limited inputs</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.vrPumpkin.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Games vs. Other Applications
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.titansOfSpace.replace("/", "")} margin="60px 30px 0" height="300px"/>
              </Fit>
              <Fill>
                <List padding="20px 0 0">
                  <ListItem>Steam, PS4, App Stores</ListItem>
                  <ListItem>360 photos, videos, etc.</ListItem>
                  <ListItem>Education, Healthcare</ListItem>
                  <ListItem>Travel, Real Estate</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text bold lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Why Tiny Eye & VR?
            </Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0" bold>
              Disclaimer: First launched game + Unity project
            </Text>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Experiment -> Proof of Concept -> MLP <br/> (Minimum Lovable Product)
            </Text>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Experience w/ New Tech, Portfolio, For Fun!
            </Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Why Google Cardboard?
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Accessibility - $15 Headset</ListItem>
                  <ListItem>Greater potential audience</ListItem>
                  <ListItem>Simple game mechanics</ListItem>
                  <ListItem>Easier for first-time VR development</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.tinyEyeBranding.replace("/", "")} margin="60px 0 0 20px" height="300px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Game Play
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.appStoreTwo.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
              <Fill>
                <Image src={images.appStoreThree.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Game Play Cont.
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.appStoreFour.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
              <Fill>
                <Image src={images.appStoreFive.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Game Play Cont.
            </Heading>
            <Text color="secondary"><Link href="https://vimeo.com/158431507">Proof of Concept Demo</Link></Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Level Making
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.levelMakingTwo.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
              <Fill>
                <Image src={images.levelMakingFour.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Level Making Cont.
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.levelMakingOne.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
              <Fill>
                <Image src={images.levelMakingThree.replace("/", "")} margin="60px 0 0 0" height="325px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Tiny Eye Architecture
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Python 3.4, Django 1.9</ListItem>
                  <ListItem>Unity 5.0, C# (not javascript)</ListItem>
                  <ListItem>Cross Platform - iOS + Android</ListItem>
                </List>
              </Fill>
              <Fill>
                <List padding="0 0 0 20px">
                  <ListItem>Django Rest Framework</ListItem>
                  <ListItem>PostgreSQL for the Database</ListItem>
                  <ListItem>Cardboard's Unity SDK</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Other Services Used
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Fabric - Twitter, Statistics, Crashlytics</ListItem>
                  <ListItem>Pushwoosh - Push Notifications</ListItem>
                  <ListItem>Unity Purchasing - In App Purchases</ListItem>
                  <ListItem>Sentry - Server Error Reporting</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.reinventWheel.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text bold lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Unity VR Overview
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.unityEditorVr.replace("/", "")} margin="60px 20px 0" height="250px"/>
              </Fit>
              <Fill>
                <List padding="20px 0 0">
                  <ListItem>Builtin support for Rift, Vive, Gear</ListItem>
                  <ListItem>Builtin support for Cardboard, soon</ListItem>
                  <ListItem>~Same as building a 3D game</ListItem>
                  <ListItem>Key differences - controls + camera</ListItem>
                  <ListItem>Head gaze, position, and movement</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Unity VR Cross Platform
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Difficulty w/ cross-VR applications</ListItem>
                  <ListItem>Inputs/Controls differ greatly</ListItem>
                  <ListItem>Cardboard for both Android + iOS</ListItem>
                  <ListItem>Costs 💰 for each add-on</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.crossPlatformVr.replace("/", "")} margin="60px 0 0 20px" height="300px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text bold lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps textSize="6rem">
              Show of Hands ✋
            </Heading>
            <Text textSize="2rem" caps textColor="secondary" margin="40px 0 0 0">
              Who has used Django Rest Framework before?
            </Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Why an API?
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.djangoRestFramework.replace("/", "")} margin="60px 20px 0" height="275px"/>
              </Fit>
              <Fill>
                <List padding="20px 0 0">
                  <ListItem>Add new levels and level packs</ListItem>
                  <ListItem>Change existing levels (i.e. difficulty)</ListItem>
                  <ListItem>Store asset bundles on S3</ListItem>
                  <ListItem>In App Purchases</ListItem>
                  <ListItem>Future proof - likely more needed later</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Why Django Rest Framework?
            </Heading>
            <Text caps textSize="4rem" textColor="secondary">
              Do I Need to Say Anything?
            </Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Models
            </Heading>
            <Text textSize="1em" textColor="secondary">
              Level pack has multiple Levels each with many HiddenObjects
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/django-models.example")}
              margin="10px auto"
            />            
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Endpoint
            </Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Simple, Standard DRF Endpoint
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/drf-endpoints.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Serializers
            </Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              Straightforward Serializers
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/drf-serializers.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Permission
            </Heading>
            <Text textSize="1.5em" textColor="secondary" margin="40px 0 0">
              API Key Permission - Security Not High Priority
            </Text>
            <CodePane
              lang="python"
              source={require("raw!../assets/code_samples/drf-permissions.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide maxWidth={1250}>
            <Heading caps>
              Talk Overview
            </Heading>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">1. Intro to VR</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">2. Yeti's VR Game</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">3. VR in Unity</Text>
            <Text lineHeight="2" textSize="2rem" textColor="secondary">4. Django APIs</Text>
            <Text bold lineHeight="2" textSize="2rem" textColor="secondary">5. API Consumption in Unity</Text>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              2D List & Detail Scenes
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Makes a request to our API</ListItem>
                  <ListItem>Creates list and populates detail scenes from API data</ListItem>
                  <ListItem>Compares identifier information from API to device storage</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.thumbsUp.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Best HTTP
            </Heading>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Best HTTP Code Samples
            </Heading>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Examples for deserializing/serializing
            </Heading>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              3D/VR Scene
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Set our photosphere from an asset bundle</ListItem>
                  <ListItem>Create and place our hidden objects from API data</ListItem>
                  <ListItem>Setup other text, images, and icons in the scene</ListItem>
                </List>
              </Fill>
              <Fit>
                <Image src={images.thumbsUp.replace("/", "")} margin="60px 0 0 60px" height="350px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Asset Bundles Background
            </Heading>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>
              Asset Bundles Code Samples
            </Heading>
          </Slide>
          <Slide maxWidth={1250}>
            <Heading fit caps>Further Resources for Unity Learning - Unity Tutorials, Udemy, Github repos, etc</Heading>
          </Slide>
          <Slide bgDarken={0.5} maxWidth={1250}>
            <Image src={images.yetiHead.replace("/", "")} margin="0" height="300px"/>
            <Heading fit caps>Any Questions?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
