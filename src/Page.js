import React from 'react'
import PropTypes from 'prop-types'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.getHours = this.getHours.bind(this);
    this.state = {
      information: [],
      personality: {
        "word_count": 0,
        "processed_language": "en",
        "personality": [
          {
            "trait_id": "big5_openness",
            "name": "Openness",
            "category": "personality",
            "percentile": 0,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_adventurousness",
                "name": "Adventurousness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_artistic_interests",
                "name": "Artistic interests",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_emotionality",
                "name": "Emotionality",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_imagination",
                "name": "Imagination",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_intellect",
                "name": "Intellect",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_liberalism",
                "name": "Authority-challenging",
                "category": "personality",
                "percentile": 0,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_conscientiousness",
            "name": "Conscientiousness",
            "category": "personality",
            "percentile": 0,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_achievement_striving",
                "name": "Achievement striving",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_cautiousness",
                "name": "Cautiousness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_dutifulness",
                "name": "Dutifulness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_orderliness",
                "name": "Orderliness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_self_discipline",
                "name": "Self-discipline",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_self_efficacy",
                "name": "Self-efficacy",
                "category": "personality",
                "percentile": 0,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_extraversion",
            "name": "Extraversion",
            "category": "personality",
            "percentile": 0,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_activity_level",
                "name": "Activity level",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_assertiveness",
                "name": "Assertiveness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_cheerfulness",
                "name": "Cheerfulness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_excitement_seeking",
                "name": "Excitement-seeking",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_friendliness",
                "name": "Outgoing",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_gregariousness",
                "name": "Gregariousness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_agreeableness",
            "name": "Agreeableness",
            "category": "personality",
            "percentile": 0,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_altruism",
                "name": "Altruism",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_cooperation",
                "name": "Cooperation",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_modesty",
                "name": "Modesty",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_morality",
                "name": "Uncompromising",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_sympathy",
                "name": "Sympathy",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_trust",
                "name": "Trust",
                "category": "personality",
                "percentile": 0,
                "significant": true
              }
            ]
          },
          {
            "trait_id": "big5_neuroticism",
            "name": "Emotional range",
            "category": "personality",
            "percentile": 0,
            "significant": true,
            "children": [
              {
                "trait_id": "facet_anger",
                "name": "Fiery",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_anxiety",
                "name": "Prone to worry",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_depression",
                "name": "Melancholy",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_immoderation",
                "name": "Immoderation",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_self_consciousness",
                "name": "Self-consciousness",
                "category": "personality",
                "percentile": 0,
                "significant": true
              },
              {
                "trait_id": "facet_vulnerability",
                "name": "Susceptible to stress",
                "category": "personality",
                "percentile": 0,
                "significant": true
              }
            ]
          }
        ],
        "needs": [
          {
            "trait_id": "need_challenge",
            "name": "Challenge",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_closeness",
            "name": "Closeness",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_curiosity",
            "name": "Curiosity",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_excitement",
            "name": "Excitement",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_harmony",
            "name": "Harmony",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_ideal",
            "name": "Ideal",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_liberty",
            "name": "Liberty",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_love",
            "name": "Love",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_practicality",
            "name": "Practicality",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_self_expression",
            "name": "Self-expression",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_stability",
            "name": "Stability",
            "category": "needs",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "need_structure",
            "name": "Structure",
            "category": "needs",
            "percentile": 0,
            "significant": true
          }
        ],
        "values": [
          {
            "trait_id": "value_conservation",
            "name": "Conservation",
            "category": "values",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "value_openness_to_change",
            "name": "Openness to change",
            "category": "values",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "value_hedonism",
            "name": "Hedonism",
            "category": "values",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "value_self_enhancement",
            "name": "Self-enhancement",
            "category": "values",
            "percentile": 0,
            "significant": true
          },
          {
            "trait_id": "value_self_transcendence",
            "name": "Self-transcendence",
            "category": "values",
            "percentile": 0,
            "significant": true
          }
        ],
        "warnings": []
      }
    }
  }

  getHours(countFrom) {
    countFrom = new Date(countFrom).getTime();
      var now = new Date(),
          countFrom = new Date(countFrom),
          timeDifference = (now - countFrom);

      var secondsInADay = 60 * 60 * 1000 * 24,
          secondsInAHour = 60 * 60 * 1000;

      var days = Math.floor(timeDifference / (secondsInADay) * 1);
      var hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
      var mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
      var secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

      return (hours + ' hours and ' + mins + ' minutes');
  }

  componentDidMount() {
    let hoursPassed = this.getHours("May 10, 2019 13:00:00");
    let infoArray = []
    let psty = this.state.personality.personality;
    let needs = this.state.personality.needs;
    let values = this.state.personality.values;

    infoArray.push('This personality profile is based on ' + this.state.personality["word_count"] + ' words captured during ' + hoursPassed + ' of tracking.');

    psty.map((item) => {
      let percent = Math.floor((item.percentile * 10000) / 100);
      infoArray.push(item.name + ': ' + percent + '. percentile');
      if (item.children) {
        item.children.map((child) => {
          let percentChild = Math.floor(Math.floor(child.percentile * 10000) / 100);
          infoArray.push(child.name + ': ' + percentChild + '. percentile');
        });
      }
    });

    needs.map((item) => {
      let percent = Math.floor(Math.floor(item.percentile * 10000) / 100);
      infoArray.push(item.name + ': ' + percent + '. percentile');
    });

    values.map((item) => {
      let percent = Math.floor(Math.floor(item.percentile * 10000) / 100);
      infoArray.push(item.name + ': ' + percent + '. percentile');
    });

    let printOut = [];
    let counter = 0;

    setInterval(() => {
      if (infoArray[counter]) {
        printOut.push(infoArray[counter]);
        this.setState({
          information: printOut
        })
        counter++;
      } else {
        printOut = [];
        this.setState({
          information: []
        });
        counter = 0;
      }
    }, 5000);

    setInterval(() => {
      fetch('https://krawc.space/api/collections/get/dataselfie_outputs?token=e2949d4cfc3fb48cb1803670f3f61a')
        .then((res) => {
          if (res.entries) {
            let recentEntry = res.entries[0];
            this.setState({
              personality: recentEntry
            })
          }
        });
    }, 1200000);


  }

  render () {

    let information = this.state.information.map((item) => {
      return(
        <h1>{item}</h1>
      )
    });


    return(
      <div class="Page">{information}</div>
    )
  }
}

export default Page;
