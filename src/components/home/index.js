import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {SearchBar,ListItem} from 'react-native-elements';
import {Content} from 'native-base';
import {ApiRequest} from "../../js/controllers/ApiRequest";
import TouchableScale from 'react-native-touchable-scale'

export class Home extends Component {


    constructor(props){
        super(props);
        this.state = {
            data: {
                "page": 1,
                "total_results": 108,
                "total_pages": 6,
                "results": [
                    {
                        "vote_count": 0,
                        "id": 299537,
                        "video": false,
                        "vote_average": 0,
                        "title": "Captain Marvel",
                        "popularity": 23.148,
                        "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
                        "original_language": "en",
                        "original_title": "Captain Marvel",
                        "genre_ids": [
                            28,
                            12,
                            878
                        ],
                        "backdrop_path": "/qOJRRTF9RkYDcpZZAkOv6tsXHuP.jpg",
                        "adult": false,
                        "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
                        "release_date": "2019-03-06"
                    },
                    {
                        "vote_count": 176,
                        "id": 76122,
                        "video": false,
                        "vote_average": 6.6,
                        "title": "Marvel One-Shot: The Consultant",
                        "popularity": 9.071,
                        "poster_path": "/75AsB4NRKaYanuCeKYgIh2hfsR1.jpg",
                        "original_language": "en",
                        "original_title": "Marvel One-Shot: The Consultant",
                        "genre_ids": [
                            12,
                            14,
                            878,
                            28
                        ],
                        "backdrop_path": "/tHthULHaBaWLS1z2UfYhvHphJSb.jpg",
                        "adult": false,
                        "overview": "Agent Coulson informs Agent Sitwell that the World Security Council wishes Emil Blonsky to be released from prison to join the Avengers Initiative. As Nick Fury doesn't want to release Blonsky, the two agents decide to send a patsy to sabotage the meeting...",
                        "release_date": "2011-09-12"
                    },
                    {
                        "vote_count": 180,
                        "id": 119569,
                        "video": false,
                        "vote_average": 6.6,
                        "title": "Marvel One-Shot: Item 47",
                        "popularity": 6.622,
                        "poster_path": "/i8i7xHztK5fb4ZXQ6BhOEwmnpQj.jpg",
                        "original_language": "en",
                        "original_title": "Marvel One-Shot: Item 47",
                        "genre_ids": [
                            878,
                            28,
                            14
                        ],
                        "backdrop_path": "/lfyIXwFQUUO52BmhbLWuPxWu9gD.jpg",
                        "adult": false,
                        "overview": "Benny and Claire, a down on their luck couple find a discarded Chitauri gun, referred to as 'Item 47'...",
                        "release_date": "2012-09-13"
                    },
                    {
                        "vote_count": 10,
                        "id": 491633,
                        "video": false,
                        "vote_average": 6.4,
                        "title": "Marvel Rising: Secret Warriors",
                        "popularity": 4.332,
                        "poster_path": "/rXmc4jvDBU04Wp8r5JMWy3HbhB3.jpg",
                        "original_language": "en",
                        "original_title": "Marvel Rising: Secret Warriors",
                        "genre_ids": [
                            16,
                            28,
                            35,
                            878,
                            10770
                        ],
                        "backdrop_path": "/95AKEQdhAF7YlH6XJSOFaqNTW0J.jpg",
                        "adult": false,
                        "overview": "When a threat no one could have expected bears down on the Marvel Universe, this ragtag, untrained band of teens have no choice but to rise together and prove to the world that sometimes the difference between a 'hero' and 'misfit' is just in the name.",
                        "release_date": "2018-09-30"
                    },
                    {
                        "vote_count": 291,
                        "id": 211387,
                        "video": false,
                        "vote_average": 7.6,
                        "title": "Marvel One-Shot: Agent Carter",
                        "popularity": 5.911,
                        "poster_path": "/eiw4sh6ieAVuJq6E1bSHQkZPfwm.jpg",
                        "original_language": "en",
                        "original_title": "Marvel One-Shot: Agent Carter",
                        "genre_ids": [
                            28,
                            12,
                            878,
                            14
                        ],
                        "backdrop_path": "/jpMVir4cCQJbtmruzpNd12yJj7Y.jpg",
                        "adult": false,
                        "overview": "The film takes place one year after the events of Captain America: The First Avenger, in which Agent Carter, a member of the Strategic Scientific Reserve, is in search of the mysterious Zodiac.",
                        "release_date": "2013-09-08"
                    },
                    {
                        "vote_count": 55,
                        "id": 259910,
                        "video": false,
                        "vote_average": 6.7,
                        "title": "Marvel Studios: Assembling a Universe",
                        "popularity": 3.86,
                        "poster_path": "/5LLBKBH4udb0wJveefs1acQ2pW9.jpg",
                        "original_language": "en",
                        "original_title": "Marvel Studios: Assembling a Universe",
                        "genre_ids": [
                            10770,
                            99
                        ],
                        "backdrop_path": "/adto5SCBYcr7trKjmhzRCMJmZZW.jpg",
                        "adult": false,
                        "overview": "A look at the story behind Marvel Studios and the Marvel Cinematic Universe, featuring interviews and behind-the-scenes footage from all of the Marvel films, the Marvel One-Shots and \"Marvel's Agents of S.H.I.E.L.D.\"",
                        "release_date": "2014-03-18"
                    },
                    {
                        "vote_count": 170,
                        "id": 253980,
                        "video": false,
                        "vote_average": 6.9,
                        "title": "Marvel One-Shot: All Hail the King",
                        "popularity": 6.473,
                        "poster_path": "/9D2ieo8f9sZdLFY7XjXp73PI7zL.jpg",
                        "original_language": "en",
                        "original_title": "Marvel One-Shot: All Hail the King",
                        "genre_ids": [
                            28,
                            35,
                            18,
                            14,
                            53
                        ],
                        "backdrop_path": "/rprTrfEdeu86szhwGZ8KEjJ5KJW.jpg",
                        "adult": false,
                        "overview": "A documentary filmmaker interviews the now-famous Trevor Slattery from behind bars.",
                        "release_date": "2014-02-04"
                    },
                    {
                        "vote_count": 54,
                        "id": 474227,
                        "video": false,
                        "vote_average": 5.4,
                        "title": "Inhumans: The First Chapter",
                        "popularity": 4.358,
                        "poster_path": "/p1f444t4JGF0t8HnRJAcS8xndxF.jpg",
                        "original_language": "en",
                        "original_title": "Inhumans: The First Chapter",
                        "genre_ids": [
                            878,
                            28,
                            12,
                            10770
                        ],
                        "backdrop_path": "/zJ4xmyVLYU9Lu3yfYiJNFiLL51D.jpg",
                        "adult": false,
                        "overview": "After the Royal Family of Inhumans is splintered by a military coup, they barely escape to Hawaii where their surprising interactions with the lush world and humanity around them may prove to not only save them, but Earth itself.",
                        "release_date": "2017-09-01"
                    },
                    {
                        "vote_count": 49,
                        "id": 253617,
                        "video": false,
                        "vote_average": 6.5,
                        "title": "LEGO Marvel Super Heroes: Maximum Overload",
                        "popularity": 3.787,
                        "poster_path": "/kZgXXEzgldKseNBezbXa03kXNzG.jpg",
                        "original_language": "en",
                        "original_title": "LEGO Marvel Super Heroes: Maximum Overload",
                        "genre_ids": [
                            28,
                            16,
                            35
                        ],
                        "backdrop_path": "/k39ctNu53NMJIPl2Qaivd7sQFLL.jpg",
                        "adult": false,
                        "overview": "Villainous Loki is amassing an army to conquer Earth! His antics are keeping Spider-Man and S.H.I.E.L.D. busy as they tackle a host of bad guys.",
                        "release_date": "2013-11-05"
                    },
                    {
                        "vote_count": 2,
                        "id": 164436,
                        "video": false,
                        "vote_average": 5.5,
                        "title": "How to Draw Comics the Marvel Way",
                        "popularity": 3.451,
                        "poster_path": "/7whuSvHu2bX6YTpwAd3C9L1XZYU.jpg",
                        "original_language": "en",
                        "original_title": "How to Draw Comics the Marvel Way",
                        "genre_ids": [
                            99
                        ],
                        "backdrop_path": null,
                        "adult": false,
                        "overview": "Superhero creator and Marvel Comics legend, Stan Lee, together with Marvel's top artist, John Buscema, demonstrate the skills needed to create compelling characters and scenes for drawing and writing comic books. Based on the book of the same name, the video became an educational classic for aspiring cartoonists and is also available on DVD. Stan Lee's flair for humor and close friendship with Buscema adds to this good-natured instructional video a sense of drama, action and fun. Stan Lee's inimitable talent for creating superheroes (Spider Man, The Incredible Hulk, etc.) and Buscema's own creations (Conan the Barbarian, Silver Surfer, etc.) meshes well in the conversation and makes this a special treat for comic book fans as well as cartoonists on all levels",
                        "release_date": "1988-07-31"
                    },
                    {
                        "vote_count": 131,
                        "id": 76535,
                        "video": false,
                        "vote_average": 7.1,
                        "title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
                        "popularity": 7.182,
                        "poster_path": "/5uGaqAnt0RQ87uKy8UlRDNrL2jY.jpg",
                        "original_language": "en",
                        "original_title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
                        "genre_ids": [
                            878,
                            14
                        ],
                        "backdrop_path": "/wdMq7F5Cr1DGg8ioNPZvWxqQer4.jpg",
                        "adult": false,
                        "overview": "Agent Coulson stops at a convenience store and deals with a coincidental robbery during his visit.",
                        "release_date": "2011-10-25"
                    },
                    {
                        "vote_count": 39,
                        "id": 284019,
                        "video": false,
                        "vote_average": 6,
                        "title": "Phineas and Ferb: Mission Marvel",
                        "popularity": 1.759,
                        "poster_path": "/uEqgmBUqFdWbCgB5Yby6Nv5681p.jpg",
                        "original_language": "en",
                        "original_title": "Phineas and Ferb: Mission Marvel",
                        "genre_ids": [
                            28,
                            12,
                            878
                        ],
                        "backdrop_path": "/omSsI9gwA2zkILdOtdYT6XyaKxn.jpg",
                        "adult": false,
                        "overview": "When Dr. Doofenshmirtz's latest invention causes the Marvel heroes to lose their powers, they team up with Phineas and Ferb to save the world from Doofenshmirtz and the Marvel villains.",
                        "release_date": "2013-08-16"
                    },
                    {
                        "vote_count": 18,
                        "id": 368304,
                        "video": false,
                        "vote_average": 5.8,
                        "title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
                        "popularity": 2.264,
                        "poster_path": "/pPdB6N9iJjn9GwrNkhMS1FKgx22.jpg",
                        "original_language": "en",
                        "original_title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
                        "genre_ids": [
                            16
                        ],
                        "backdrop_path": "/7QNGBStqOLNtKrczEmbjfuCHKjo.jpg",
                        "adult": false,
                        "overview": "In \"LEGO Marvel Super Heroes: Avengers Reassembled!,\" the Avengers prepare for a party at Stark Tower and notice that Iron Man is acting strange. After some investigation, they discover that the evil Ultron has taken control of Iron Man and his armor as part of his scheme to take over the world. It's up to Captain America, the Hulk, Thor, Vision, Black Widow, Hawkeye and their friends (Spider-Man, Iron Spider, and special guest star Ant-Man) to rescue Iron Man from Ultron's clutches and defeat the super villain before he causes even more destruction and chaos.",
                        "release_date": "2015-11-16"
                    },
                    {
                        "vote_count": 27,
                        "id": 299969,
                        "video": false,
                        "vote_average": 7.3,
                        "title": "Marvel: 75 Years, From Pulp to Pop!",
                        "popularity": 2.239,
                        "poster_path": "/g716rAncfsYzny2eZoxX8txjdRw.jpg",
                        "original_language": "en",
                        "original_title": "Marvel: 75 Years, From Pulp to Pop!",
                        "genre_ids": [
                            99
                        ],
                        "backdrop_path": "/7kKsMO1meOBTfat6eBjJjNayslA.jpg",
                        "adult": false,
                        "overview": "In celebration of the publisher's 75th anniversary, the hour-long special will take a detailed look at the company's journey from fledgling comics publisher to multi-media juggernaut. Hosted by Emily VanCamp (S.H.I.E.L.D. Agent Sharon Carter), the documentary-style feature will include interviews with comic book icons, pop culture authorities, and Hollywood stars.  The special also promises an \"extraordinary peek into Marvel's future!\" Might Marvel release the first official footage from next year's Avengers: Age of Ultron or Ant-Man? If they do, you'll know about it here.",
                        "release_date": "2014-11-04"
                    },
                    {
                        "vote_count": 0,
                        "id": 278755,
                        "video": false,
                        "vote_average": 0,
                        "title": "Maggie Marvel",
                        "popularity": 0.845,
                        "poster_path": "/3TLr9xFjw4AERREsK019sH5PIEC.jpg",
                        "original_language": "en",
                        "original_title": "Maggie Marvel",
                        "genre_ids": [
                            18,
                            35
                        ],
                        "backdrop_path": "/2R91b04aPrS08muN0VJsUibClky.jpg",
                        "adult": false,
                        "overview": "About a single Mom who moonlights as a contract killer. Maggie Marvel must balance career and family, murder and math homework. She is pushed into this dangerous world... only to find out she is very good at it.",
                        "release_date": "2011-03-05"
                    },
                    {
                        "vote_count": 0,
                        "id": 508944,
                        "video": false,
                        "vote_average": 0,
                        "title": "Untitled Marvel Project (2)",
                        "popularity": 1.106,
                        "poster_path": null,
                        "original_language": "en",
                        "original_title": "Untitled Marvel Project (2)",
                        "genre_ids": [
                            28
                        ],
                        "backdrop_path": null,
                        "adult": false,
                        "overview": "Plot unknown.",
                        "release_date": "2022-05-06"
                    },
                    {
                        "vote_count": 17606,
                        "id": 24428,
                        "video": false,
                        "vote_average": 7.6,
                        "title": "The Avengers",
                        "popularity": 53.388,
                        "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
                        "original_language": "en",
                        "original_title": "The Avengers",
                        "genre_ids": [
                            878,
                            28,
                            12
                        ],
                        "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
                        "adult": false,
                        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
                        "release_date": "2012-04-25"
                    },
                    {
                        "vote_count": 4,
                        "id": 258670,
                        "video": false,
                        "vote_average": 4,
                        "title": "Marvel Renaissance",
                        "popularity": 0.737,
                        "poster_path": "/2kwR7ErqMg2ZJ9I4XREpKMPcfzf.jpg",
                        "original_language": "fr",
                        "original_title": "Marvel Renaissance",
                        "genre_ids": [
                            99
                        ],
                        "backdrop_path": "/zAsk880Ag1yi2fQosOcYrWDbIuW.jpg",
                        "adult": false,
                        "overview": "",
                        "release_date": "2014-02-28"
                    },
                    {
                        "vote_count": 13,
                        "id": 372631,
                        "video": false,
                        "vote_average": 5.7,
                        "title": "Marvel Super Hero Adventures: Frost Fight!",
                        "popularity": 1.56,
                        "poster_path": "/uEf4zc3yVZP0B1BBP4Ku1oTqJ0X.jpg",
                        "original_language": "en",
                        "original_title": "Marvel Super Hero Adventures: Frost Fight!",
                        "genre_ids": [
                            16,
                            14
                        ],
                        "backdrop_path": "/9L7II2mnZtyrSJWaPVf2AODxL6U.jpg",
                        "adult": false,
                        "overview": "The holiday season gets extra chilly as Loki and the frost giant Ymir plot to conquer the world. Marvel heroes Iron Man, Captain America, Hulk, Thor and others must stop the villains from stealing Santa's power – if anyone can actually find the mysterious Mr. Claus. Fortunately, Rocket Raccoon and Groot are also hot on Santa's trail. Heroes, villains, elves and cosmic bounty hunters collide in an epic quest that leaves the fate of the holiday and the world in the balance.",
                        "release_date": "2015-12-15"
                    },
                    {
                        "vote_count": 0,
                        "id": 508950,
                        "video": false,
                        "vote_average": 0,
                        "title": "Untitled Marvel Project (3)",
                        "popularity": 0.855,
                        "poster_path": null,
                        "original_language": "en",
                        "original_title": "Untitled Marvel Project (3)",
                        "genre_ids": [
                            28
                        ],
                        "backdrop_path": null,
                        "adult": false,
                        "overview": "Plot unknown.",
                        "release_date": "2022-07-29"
                    }
                ]
            },
            dataSource : [],
            isReady:false,
            movies:[],
            searchText:''
        }
    }

    _onChangeText = async ( text ) => {
        this.setState({searchText:text});
        let movies = await ApiRequest.search(text);
        this.setState({movie:movies});
    };
    render() {
        const {data} =this.state;
        return (
            <Content>
                <SearchBar
                    onClear={()=>{alert('clear')}}
                    onCancel={()=>{
                        alert('OnCancel')
                    }}
                    cancelButtonTitle={'Search'}
                    value={this.state.searchText}
                    showLoading
                    platform='ios'
                    cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    placeholder='Search'
                    onChangeText={this._onChangeText}
                />

                <View>
                    {
                        data.results.map((item, i) => (
                            <ListItem
                                onPress={()=>{alert('OnPress')}}
                                component={TouchableScale}
                                titleStyle={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                                subtitleStyle={{ color: 'black' }}
                                chevronColor="black"
                                chevron
                                numberOfLine={1}
                                key={i}
                                leftAvatar={{
                                    containerStyle:{flex: 1, marginLeft: -10, marginTop: 0,height: 200},
                                    activeOpacity:0.7,
                                    size:"xlarge",
                                    rounded: false,
                                    source: {
                                        uri: 'https://image.tmdb.org/t/p/w500/'+item.poster_path }
                                }}
                                title={item.original_title}
                                leftIcon={{ name: item.icon }}
                                subtitle={'Année: '+item.release_date}
                            />
                        ))
                    }
                </View>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        paddingTop: 20
    },

});
