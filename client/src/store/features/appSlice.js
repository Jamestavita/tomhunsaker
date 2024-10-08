import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Mindset
  mindset_assessment_progress: 0,
  mindset_assessment_questions: [
    //Personal
    {
      number: "01",
      qstn: "I genuinely believe I can change my circumstances",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Effective patterns of thought is the foundation to action quality",
    },
    {
      number: "02",
      qstn: "I focus on doing things better rather than doing more things",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Action quality better predicts success than action quantity",
    },
    {
      number: "03",
      qstn: "I can clearly describe how my thoughts influence my level of engagement",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance: "Patterns of thought directly influence engagement level",
    },
    {
      number: "04",
      qstn: "I approach each situation as an opportunity to learn",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The ability to see every situation as an opportunity to learn strongly relates to openness to continuous improvement",
    },
    {
      number: "05",
      qstn: "I quickly change even strong opinions when presented with better evidence",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Openness to reliable evidence is high in strong collaborators",
    },
    {
      number: "06",
      qstn: "I excel at nurturing and expressing gratitude",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Developing and demonstrating gratitude is shown to improve how opportunities are recognized and maximized",
    },
    {
      number: "07",
      qstn: "I am quick to ask good questions",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Questions activate thinking and relational dynamics in ways that statements or exclamations do not",
    },
    {
      number: "08",
      qstn: "My thoughts, beliefs, and actions align",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Congruence of thought, belief, and action reduces cognitive dissonance and increases confidence",
    },
    {
      number: "09",
      qstn: "I seek new challenges",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The willingness to expand comfort zones and persist through difficulty increase the odds for uncommon success",
    },
    {
      number: "10",
      qstn: "I achieve more than similarly talented peers",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The invested mindset and related determination help to explain the difference in outcomes among similarly talented populations in similar situations",
    },

    //Interpersonal
    {
      number: "11",
      qstn: "I seek to understand what others find meaningful",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "People are more likely to choose, be candid with, and are more loyal to those they believe genuinely care about their interests",
    },
    {
      number: "12",
      qstn: "I am trustworthy",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "People who are viewed as trustworthy (measured by competence, integrity, and benevolence) consistently rank high on desired team member metrics",
    },
    {
      number: "13",
      qstn: "I am candid but not contentious",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The ability to have difficult conversations without causing or taking offense is known to improve team dynamics",
    },
    {
      number: "14",
      qstn: "I see the good in others",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The ability to work well with others is rooted in valuing what they can contribute",
    },
    {
      number: "15",
      qstn: "I am collaborative",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Relational effectiveness improves when common ground is found",
    },
    {
      number: "16",
      qstn: "I make it easier for others to get things done",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Teams comprised of members who seek more efficiently ways for the group to work are known to achieve better results",
    },
    {
      number: "17",
      qstn: "I actively find ways to help others maximize their potential",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Teams comprised of members who actively facilitate the success of others are known to achieve better results",
    },
    {
      number: "18",
      qstn: "I make others feel that they can share openly with me",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The quality and frequency of information shared is directly influenced by the level of trust felt among team members",
    },
    {
      number: "19",
      qstn: "I deliver on my commitments",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "People who come through with their part are preferred by their peers",
    },
    {
      number: "20",
      qstn: "I improve the well-being of those around me",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Research shows that preference is given to those who help others feel good when they're around them",
    },

    //Team
    {
      number: "21",
      qstn: "Our purpose is authentic, actionable, and widely understood",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams that have and act with clear purpose outperform their peers on talent attraction, development, and retention metrics",
    },
    {
      number: "22",
      qstn: "Over 80% of our people highly recommend being on this team",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Strong positive sentiment that exceeds 80% is the threshold for high performing teams",
    },
    {
      number: "23",
      qstn: "We are exceptional at developing our people when and how it is needed",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people believe they have access to exceptional development resources outperform their peers by nearly 20%",
    },
    {
      number: "24",
      qstn: "We have lower than industry average turnover among our best people",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Companies with better than average turnover among their top performers are more likely to also generate better than average returns",
    },
    {
      number: "25",
      qstn: "We attract all of the talent we need",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "More strongly preferred places of employment also enjoy a valuation premium to their peers",
    },
    {
      number: "26",
      qstn: "People here are consistently put in the right position to maximize their potential",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a 50% productivity gain, on average, when people believe they are in  the right position to effectively contribute",
    },
    {
      number: "27",
      qstn: "We adjust our management approach based on the type of change we need to achieve",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Research shows that change efforts are 3x more likely to succeed when managers align their approach to the type of change needed",
    },
    {
      number: "28",
      qstn: "It is easy to get things done here",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a strong correlation between lower perceived bureaucracy and higher productivity",
    },
    {
      number: "29",
      qstn: "We excel at matching people's talents and interests with the needs of the business",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a 76% engagement increase when people believe they are in a good position to make a valuable contribution",
    },
    {
      number: "30",
      qstn: "People here are trusted to take decisions and account for their results",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Positive accountability nearly doubles when people believe that they have the freedom to take decisions are responsible for their results",
    },
    {
      number: "31",
      qstn: "It is safe here to take risks and to continuously learn",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The more secure people feel in their ability to take calculated risk the wiser decisions they make about risk and the more resilient they are when pursuing them ",
    },
    {
      number: "32",
      qstn: "People here feel free to speak candidly",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Transparent information flow either facilitates or inhibits the speed and reliability with which a team understands and responds to its environment",
    },
    {
      number: "33",
      qstn: "People here feel respected",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance: "Teams whose people feel respected report 38% less burnout",
    },
    {
      number: "34",
      qstn: "Our approach to rewards and recognition is exceptional",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people believe they are appropriately recognized and rewarded experience nearly 40% higher sales",
    },
    {
      number: "35",
      qstn: "Power is effectively distributed across our team",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },

    //PPP
    {
      number: "36",
      category: "Purpose",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Our purpose statement — it's clear and motivating",
            "Different agendas, functions and incentives around purpose are considered",
            "We regularly discuss purpose",
            "Our actions reinforce our purpose",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Our purpose statement - it's unclear or doesn't fit us",
            "Overlooking different functions when considering purpose",
            "The way we approach purpose seems inauthentic",
            "What we say and what we do often don't match",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Develop a meaningful purpose statement",
            "Bring different functions together to create purpose alignment",
            "Be authentic about how we project our purpose",
            "Take concrete actions that show our commitment to purpose",
          ],
        },
      ],
      significance:
        "The reason why something is done. It is putting values to action. A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.",
    },
    {
      number: "37",
      category: "People",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "We focus on developing people",
            "Respectful candor is encouraged and practiced",
            "The caliber of performance incentives provided",
            " Freedom to act, learn, and grow",
            "Giving proper credit for contributions",
            "Genuine collaboration within and across teams",
            "People can be their best self here",
            "We excel at delivering on the 4 universal desires (earn, contribute, learn, belong)",
            "We effectively adapt our culture for our context",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Underinvesting in people development",
            "Saying that respectful candor is encouraged but not practicing it",
            "Ineffective performance incentives",
            "Lack of freedom to act, learn, and grow",
            "Withholding proper credit for contributions",
            "Providing too few collaboration resources",
            "Asking for ideas but not embracing them",
            "Underdelivering on the 4 universal desires (earn, contribute, learn, belong)",
            "Not effectively adapt our culture for our context",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Invest in impactful learning opportunities",
            "Encourage effective candor",
            "Provide more appealing performance incentives",
            "Improve trust",
            "Ensure that rewards and promotion are merit-driven",
            "Give proper credit for contributions",
            "Improve cross-training",
            "Genuinely support developing valuable ideas",
            "More effectively delivering on the 4 universal desires (earn, contribute, learn, belong)",
            "More effectively adapting our culture for our context",
          ],
        },
      ],
      significance:
        "How well those in a group are able to maximize their potential. A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.",
    },
    {
      number: "38",
      category: "Positions",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Hiring is clear and transparent",
            "People are hired based on merit",
            "Roles are developed based on company need and candidate talents",
            "People are promoted for merit-based reasons",
            "Employee reviews are meaningful and effective",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Hiring practices are unclear",
            "Politics influence hiring decisions",
            "Relationships influence roles more than capability",
            "Promotions are not always merit-driven",
            "Employee reviews that don't focus on talent and career development",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Make hiring clear and transparent",
            "Hire based on merit",
            "Fit people to roles based on need and talent for the position",
            "Promote for merit-based reasons",
            "Make the employee reviews more meaningful and effective",
          ],
        },
      ],
      significance:
        "How well people are put in the right situations to deliver excellence. A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.",
    },
    {
      number: "39",
      category: "Process",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Bureaucracy is minimal",
            "People are encouraged to communicate directly with others rather than through a chain of command",
            "Managers provide evidence for decisions rather than relying on authority",
            "Meetings are the right length of time and effective",
            "It is safe to give candid feedback at all levels",
            "Freedom to resolve issues at the local level",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Bureaucracy makes it hard to get things done",
            "Requiring chain of command communication",
            "Focusing on authority rather than evidence to make decisions",
            "Ineffective meetings",
            "Lack of freedom to resolve issues at the local level",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Reduce bureaucracy by having regular and transparent process efficiency reviews everyone can contribute to",
            "Encourage direct rather than chain of command communication",
            "Share the rational decisions",
            "Right-size, right-duration, and right-purpose meetings",
            "Encourage and support local level problem solving",
            "Make it safe to give candid feedback at all levels",
          ],
        },
      ],
      significance:
        "The ease and quality with which people in a group can get things done. A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.",
    },
  ],
  mindset_assessment_evaluation: {
    Personal: [],
    Interpersonal: [],
    Team: [],
    Purpose: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    People: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Positions: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Process: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
  },

  //Strategy
  strategy_assessment_progress: 0,
  strategy_assessment_questions: [
    //Personal
    {
      number: "01",
      qstn: "I focus on what is most meaningful to me",
      category: "Personal",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Effective patterns of thought is the foundation to action quality",
    },
    {
      number: "02",
      qstn: "My current skillset is highly valuable",
      category: "Personal",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Action quality better predicts success than action quantity",
    },
    {
      number: "03",
      qstn: "My current skillset is highly uniquet",
      category: "Personal",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance: "Patterns of thought directly influence engagement level",
    },
    {
      number: "04",
      qstn: "I know exactly what I want to achieve over the next 3 years",
      category: "Personal",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The ability to see every situation as an opportunity to learn strongly relates to openness to continuous improvement",
    },
    {
      number: "05",
      qstn: "I effectively diagnose which type of change is best for a given context",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Openness to reliable evidence is high in strong collaborators",
    },
    {
      number: "06",
      qstn: "I change quickly when presented with a better way",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Developing and demonstrating gratitude is shown to improve how opportunities are recognized and maximized",
    },
    {
      number: "07",
      qstn: "I treat all forms of change equally",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Questions activate thinking and relational dynamics in ways that statements or exclamations do not",
    },
    {
      number: "08",
      qstn: "I help others to change for the better",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Congruence of thought, belief, and action reduces cognitive dissonance and increases confidence",
    },
    {
      number: "09",
      qstn: "I feel defensive when presented with options that differ from my own ideas",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The willingness to expand comfort zones and persist through difficulty increase the odds for uncommon success",
    },

    //Team
    {
      number: "10",
      qstn: "We are often surprised by external forces that impact us",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "People are more likely to choose, be candid with, and are more loyal to those they believe genuinely care about their interests",
    },
    {
      number: "11",
      qstn: "Ideas that differ from the norm are encouraged ",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "People who are viewed as trustworthy (measured by competence, integrity, and benevolence) consistently rank high on desired team member metrics",
    },
    {
      number: "12",
      qstn: "We communicate about change in a way that doesn't disparage the past",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The ability to have difficult conversations without causing or taking offense is known to improve team dynamics",
    },
    {
      number: "13",
      qstn: "We make a clear distinction between change for difference and change for better",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The ability to work well with others is rooted in valuing what they can contribute",
    },
    {
      number: "14",
      qstn: "We provide our people with the appropriate time to process chanage",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Relational effectiveness improves when common ground is found",
    },
    {
      number: "15",
      qstn: "We are clear about the advantages to be gained when a change is proposed",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams comprised of members who seek more efficiently ways for the group to work are known to achieve better results",
    },
    {
      number: "16",
      qstn: "We excel at developing a clear, prioritized vision for our future",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams comprised of members who actively facilitate the success of others are known to achieve better results",
    },
    {
      number: "17",
      qstn: "Our strategy can be clearly articulated by everyone on the team",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The quality and frequency of information shared is directly influenced by the level of trust felt among team members",
    },

    //Organization
    {
      number: "18",
      qstn: "Over 90% of our customer reviews are positive and over 60% of customers actively recommend us to others",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams that have and act with clear purpose outperform their peers on talent attraction, development, and retention metrics",
    },
    {
      number: "19",
      qstn: "We possess valuable intangibles in the form of strong customer relationships, recognized brand names and market intelligence",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Strong positive sentiment that exceeds 80% is the threshold for high performing teams",
    },
    {
      number: "20",
      qstn: "The statement that our customers are most likely to say about us is (choose one):",
      category: "Organization",
      options: [
        `They fit my needs better than anyone and I’m confident they’ll continue to do so in the future`,
        `They are a great fit for my needs and I hope they can continue to be so in the future`,
        `They are a good fit for my needs, and I’m willing to stay with them in the future if they continue to be so`,
        `They fit my needs for now, but I’m open to a better alternative`,
        `I use them because I’ve yet to find an alternative, but I’ll switch when I do`,
      ],
      significance:
        "Teams whose people believe they have access to exceptional development resources outperform their peers by nearly 20%",
    },
    {
      number: "21",
      qstn: "Our level of employee engagement is in the top quartile of our industry",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Companies with better than average turnover among their top performers are more likely to also generate better than average returns",
    },
    {
      number: "22",
      qstn: "We find it easy to attract the talent that we need",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "More strongly preferred places of employment also enjoy a valuation premium to their peers",
    },
    {
      number: "23",
      qstn: "The financial return on additional investments in our core business is high",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a 50% productivity gain, on average, when people believe they are in  the right position to effectively contribute",
    },
    {
      number: "24",
      qstn: "The companies that supply to us and/or distribute our products and services would say that we treat them as valued business partners",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Research shows that change efforts are 3x more likely to succeed when managers align their approach to the type of change needed",
    },
    {
      number: "25",
      qstn: "The communities in which we operate would say that we are a positive influence",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a strong correlation between lower perceived bureaucracy and higher productivity",
    },
    {
      number: "26",
      qstn: "We are viewed as a more ethical and socially responsible company than direct alternatives",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a 76% engagement increase when people believe they are in a good position to make a valuable contribution",
    },
    {
      number: "27",
      qstn: "We actively consider the following stakeholders when developing strategy (select all that apply)",
      category: "Organization",
      options: ["Customers", "Investors", "Employees", "Partners", "Community"],
      significance:
        "Positive accountability nearly doubles when people believe that they have the freedom to take decisions are responsible for their results",
    },
    {
      number: "28",
      qstn: "Few competitors can match what we offer",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The more secure people feel in their ability to take calculated risk the wiser decisions they make about risk and the more resilient they are when pursuing them ",
    },
    {
      number: "29",
      qstn: "Our market share has been increasing over the past three years",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Transparent information flow either facilitates or inhibits the speed and reliability with which a team understands and responds to its environment",
    },
    {
      number: "30",
      qstn: "This best describes the next 3 years for our primary service market(s)",
      category: "Organization",
      options: [
        "Rapidly growing and global",
        "Moderately growing and global",
        "Rapidly growing and regional",
        "Moderately growing and regional",
        "Market is still forming",
      ],
      significance: "Teams whose people feel respected report 38% less burnout",
    },
    {
      number: "31",
      qstn: "We have a high level of perceived uniqueness relative to competitors; and/or our NPS (Net Promoter Score) is in the top quartile for our industry",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people believe they are appropriately recognized and rewarded experience nearly 40% higher sales",
    },
    {
      number: "32",
      qstn: "We enjoy a price premium, higher growth rates and/or higher margins than our competitors",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },
    {
      number: "33",
      qstn: "We have significant intangibles in the form of our loyal workforce, effective processes and a strong corporate culture",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },
    {
      number: "34",
      qstn: "We increasingly need to invest more to produce similar results",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },
    {
      number: "35",
      qstn: "The purchase frequency and/or growth rate within our core customers is decreasing",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },
    {
      number: "36",
      qstn: "Our core customers increasingly want more for less",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },
    {
      number: "37",
      qstn: "We excel at predicting the forces that will impact our market(s)",
      category: "Organization",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams whose people feel that power is appropriately disturbed and exercised report 74% less stress",
    },

    //PR
    {
      number: "38",
      category: "Fit_to_Purpose",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Our offering is highly valued and demanded by an attractive, expanding, and accessible audience",
            "Our actions align with our messages",
            "Our returns on incremental investment are strong and growing",
            "Our business model is desired by customers, feasible to operate efficiently, and built sustainably",
            "We are exceptional at training employees on customer success",
            "We have a robust and diversified partner ecosystem",
            "We enjoy significant economies of scale benefits",
            "The communities where we operate welcome our presence",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Our core audience increasingly wants more for less",
            "More resources are needed to produce similar or diminishing results",
            "Our words and our actions don't align",
            "Our returns on incremental investment are limited and declining",
            "Our business model is becoming less desired by customers, less feasible to operate efficiently, and increasingly requires more to yield less",
            "We are not exceptional at training employees on customer success",
            "We have a narrow and volatile partner ecosystem",
            "We don't enjoy significant economies of scale benefits",
            "The communities where we operate are ambivalent to or distrustful of our presence",
            "We don't have reliable data in one or more of these areas",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Seek to improve the perceived value of our offering by an attractive, expanding, and accessible audience",
            "Better aligning our actions with our messages",
            "Ensure our business model is desirable, feasible, and sustainable",
            "Improve how we train employees on customer success",
            "Deepen and broaden our partner ecosystem",
            "Seek opportunities for improved economies of scale benefits",
            "Become a welcomed member of all communities where we operate",
          ],
        },
      ],
      significance: `Fit-to-Purpose is your level of attractiveness to stakeholders. It is the relevance of your value proposition to key stakeholder and answers "How valuable are our actions to key stakeholders?".`,
    },
    {
      number: "39",
      category: "Relative_Advantage",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "We have a deeply loyal and growing base of customers who identify with our purpose",
            "Few alternatives can match and sustain what we offer",
            "Customers view us as highly differentiated",
            "Our partner ecosystem is distinct from competitors",
            "We're able to attract and retain top quality talent",
            "The communities where we operate prefer us to our peers",
            "We provide more attractive investment returns to our peers",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Customers are increasingly skeptical of our purpose",
            "Others can replicate and exceed what we offer",
            "Switching costs from our service to a substitute are decreasing",
            "Our partner ecosystem is common for our market",
            "We find it difficult to attract and retain top quality talent",
            "The communities where we operate prefer our peers to us",
            "We provide less attractive investment returns to our peers",
            "We don't have reliable data in one or more of these ares",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Seek ways to deepen customer loyalty",
            "Seek ways to become more distinct from alternatives",
            "Ensure that a valuable and growing customer base views us as highly differentiated",
            "Adopt ways to make our partner ecosystem distinct from competitors",
            "Outline why or why (or why not) you're able to attract and retain top quality talent",
            "Articulate why (or why not) the communities where we operate prefer us to our peers",
            "Codify why (or why not) we provide more attractive investment returns to our peers",
          ],
        },
      ],
      significance: `Relative Advantage is how much stakeholders prefer you to others. It is your distinctiveness from alternatives and answers "How unique from other options are you viewed by key stakeholders?".`,
    },
  ],
  strategy_assessment_evaluation: {
    Personal: [],
    Team: [],
    Organization: [],
    Fit_to_Purpose: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Relative_Advantage: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
  },

  //Innovation
  innovation_assessment_progress: 0,
  innovation_assessment_questions: [
    //Personal
    {
      number: "01",
      qstn: "I start each day with the goal to find a valuable new idea",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Less than 20% of people look for valuable new ideas daily and nearly 85% of value creation comes from those who do",
    },
    {
      number: "02",
      qstn: "I avoid information I don't agree with",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "World-class innovators are open to information that may not reinforce the status quo",
    },
    {
      number: "03",
      qstn: "I excel at understanding what people like and dislike about an experience",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Scouting great ideas is aided by observing sources of joy, frustration, and ambivalence in an experience",
    },
    {
      number: "04",
      qstn: "I believe that others share my preferences",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Effective observation requires separating the preferences of others from your own",
    },
    {
      number: "05",
      qstn: "I have a favorite framework I use to help me identify valuable new opportunities",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The brain uses mental frames to make sense of information and valuable frameworks help in this process",
    },
    {
      number: "06",
      qstn: "I choose comfort over new challenges",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Seeking comfort is linked to indifference whereas seeking challenges is linked to innovation",
    },
    {
      number: "07",
      qstn: "I excel at understanding how the parts connect in complex situations",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Effective scouting links a single observed point to its broader context and connects the relational dots in between ",
    },
    {
      number: "08",
      qstn: "I ask great questions",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Questions unlock curiosity and are linked to the desire to learn",
    },
    {
      number: "09",
      qstn: "I validate ideas before selling them to others",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Those who seek evidence to support or refute their ideas raise the confidence of others to consider them",
    },
    {
      number: "10",
      qstn: "I have a positive outlook about the future",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "World-class innovators share a sense of hope for the future and their role in it",
    },
    {
      number: "11",
      qstn: "I seek to understand new ideas before I reject or embrace them",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Seeking to understand an idea before forming an opinion about it allows for its merit to be genuinely considered",
    },
    {
      number: "12",
      qstn: "I act decisively on good new ideas",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Ideas are only as good as the actions that bring them to life",
    },
    {
      number: "13",
      qstn: "When I come up with a new idea I visualize myself having success implementing it",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Those who see themselves succeeding with the new idea are more likely to do so",
    },
    {
      number: "14",
      qstn: "I persist through challenges to make good ideas happen",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "World-class innovators know that resistance to anything new is natural and persist when they are convicted about an idea's value",
    },

    //Interpersonal
    {
      number: "15",
      qstn: "I excel at understanding the emotions others have when they engage with a service",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Emotions are key to understanding sources of joy, frustration, or ambivalence ",
    },
    {
      number: "16",
      qstn: " I enjoy bringing people together to achieve new things ",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Common among world-class innovators is they enjoy bringing others together in the act of building",
    },
    {
      number: "17",
      qstn: "I involve those with interest and influence early with my ideas",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Winning buy-in for new ideas requires advocacy from those that have interest in the idea and influence to get others onboard",
    },
    {
      number: "18",
      qstn: "I first share my ideas with people who I know will support them",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Rather than first sharing ideas with those who will agree it's better to first share ideas with people who know about the domain of the idea, have a bit of time to consider it, and care enough to be candid about it's potential",
    },
    {
      number: "19",
      qstn: "I am clear about the cost-to-benefit ratio when presenting new ideas",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Ideas that have clearly attached benefits that align with the interests of those who will consider whether to adopt them are more likely to gain support",
    },
    {
      number: "20",
      qstn: "People tend to get defensive when I share with them ways to improve",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The willingness and ability to candidly give and receive feedback is key to refining ideas",
    },
    {
      number: "21",
      qstn: "I deliver a compelling story for why an opportunity should be supported",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Persuasive narratives bring ideas to life in ways other forms of communication do not",
    },
    {
      number: "22",
      qstn: "I make complex ideas simple",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "World-class innovators make complex things simple to help others make sense of them",
    },
    {
      number: "23",
      qstn: "I accurately determine what it will take to implement an idea",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Considering the pathway forward to implement an idea aids in determining its value",
    },
    {
      number: "24",
      qstn: "My ideas get adopted",
      category: "Interpersonal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "World-class innovators get their ideas adopted at a higher rate than ideas by following the core concepts of winning buy-in",
    },

    //Team
    {
      number: "25",
      qstn: "Taking calculated risks is positively incentivized here",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams that encourage wise risk taking enjoy more frequent and better innovation output",
    },
    {
      number: "26",
      qstn: "We have a clear platform for proposing new ideas",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The systems teams employ to help or hinder the sourcing of ideas influence the quality and breadth of the ideas they capture",
    },
    {
      number: "27",
      qstn: "We effectively invest in innovation skill development ",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "There is a direct link between the level that innovation is encouraged, the skill development offered to effectively innovate, and the quality and breadth of innovation output",
    },
    {
      number: "28",
      qstn: "Our R&D efforts produce returns that are better than our peers",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Size and quality of R&D efforts are a key indicator of innovation output",
    },
    {
      number: "29",
      qstn: "People here trust that their ideas will be appropriately considered",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "People share ideas when they believe there is incentive to do so and those considering them can be trusted",
    },
    {
      number: "30",
      qstn: "We excel at initial validation to improve the likelihood of innovation success",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Ideas that have iniitial validation are nearly 80% more likely to succeed",
    },
    {
      number: "31",
      qstn: "Innovation contribution is a clear part of our performance review system",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams that include innovation contribution in their performance reviews average a 3x increase in innovation output",
    },
    {
      number: "32",
      qstn: "The best ideas always win here",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "When people believe that the merit of ideas will win over the politics of a team they are more likely to contribute valuable new ideas",
    },
    {
      number: "33",
      qstn: "We effectively target markets that are likely to expand",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "World-class innovators know that the ocean tide is more powerful than even the best ship and focus on favorable markets",
    },
    //Rank
    {
      number: "34",
      qstn: "Rank in order what your customers care about (high to low)",
      category: "Team",
      options: [
        `Choice ("I want customizable options")`,
        `Convenience ("I want ease of access")`,
        `Price ("I am price sensitive")`,
        `Quality ("I desire functional outcomes")`,
        `Service ("I want help when and how I need it")`,
        `Status ("I want social status")`,
        `Integration ("I prefer to single-source")`,
      ],
      significance:
        "World-class innovators have a clear understanding of what the target audience of a given experience cares about most",
    },
    {
      number: "35",
      qstn: "Rank in order what you are best built to deliver (high to low)",
      category: "Team",
      options: [
        `Customization ("We can efficiently personalize")`,
        `Accessibility ("It's easy to access our service")`,
        `Cost ("We manage costs well")`,
        `Reliability ("We deliver on what we say")`,
        `Responsiveness ("We engage quickly and effectively")`,
        `Prestige ("We provide social status")`,
        `Integration ("Our service work well across our platform")`,
      ],
      significance:
        "World-class innovators prioritize their capabilities to deliver on what their target audience cares about most",
    },

    //IVAS
    {
      number: "36",
      category: "Ideation",
      qstns: [
        {
          qstn: "Continue",
          options: [
            `The encouragement to take calculated risk`,
            `How well we invest in innovation skill development`,
            `How asking great questions is central to our interactions`,
            `Going out of our way to limit bias when considering new ideas`,
            `Focusing on what we "ought" to over what we "want" to`,
          ],
        },
        {
          qstn: "Stop",
          options: [
            `Misalignment between what is said and done regarding innovation`,
            `Underfunding innovation capacity`,
            `Discouraging candid questions`,
            `Bias when considering new ideas`,
            `Seek ideas focused on what we "want" to see over what we "ought" to see`,
          ],
        },
        {
          qstn: "Start",
          options: [
            `Align what we say and what we do regarding innovation`,
            `Embrace calculated risk`,
            `Invest in innovation skill development`,
            `Encourage candid questions`,
            `Embrace practices to limit bias during ideation`,
            `Incentivize regular new idea development;`,
          ],
        },
      ],
      significance:
        "Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your ideation practices directly influences the quality of your innovation results and the potential growth trajectory of your team",
    },
    {
      number: "37",
      category: "Validation",
      qstns: [
        {
          qstn: "Continue",
          options: [
            `The freedom to test  new ideas`,
            `Having clear metrics for effective validation`,
            `Providing training on validation techniques`,
            `Universal standards for validation success`,
          ],
        },
        {
          qstn: "Stop",
          options: [
            `Lack of time and resources to test ideas`,
            `Unclear metrics for effective validation`,
            `Lack of effective training on validation techniques`,
            `Inconsistent standards for validation success`,
          ],
        },
        {
          qstn: "Start",
          options: [
            `Provide time and resources to test new ideas`,
            `Set clear metrics for effective validation`,
            `Provide training on effective validation techniques`,
            `Streamline and make transparent the standards for validation success`,
          ],
        },
      ],
      significance:
        "Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your validation practices directly influences the quality of your innovation results and the potential growth trajectory of your team",
    },
    {
      number: "38",
      category: "Adoption",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Training on building an effective innovation case",
            "Use of a universally understood framework for sharing the potential value of an innovation",
            "Encourage interactions with people who are effective innovation messengers",
            "Reinforce the effective components to innovation messaging",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Underresourcing innovation adoption training",
            "Not having a universally understood framework for sharing the potential value of an innovation",
            "Disouraging interactions with people who aren't your direct manager",
            "Not providing clear guidance on the effective components to innovation messaging",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Provide training on building an effective innovation case",
            "Have a universally understood framework for sharing the potential value of an innovation",
            "Encourage interactions with people who are effective innovation messengers",
            "Making known the effective components to innovation messaging",
          ],
        },
      ],
      significance: `Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your adoption practices directly influences the quality of your innovation results and the potential growth trajectory of your team`,
    },
    {
      number: "39",
      category: "System",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Clear, transparent, and timely pathway for sharing new ideas",
            "Alignment between what is said and how things are actually done",
            "Consistently developing innovation capacity",
            "Clear and motivating incentives to be innovative",
            "Easy to understand and use system to share ideas and get credit for their success",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Unclear, obscure, and slow pathway for sharing new ideas",
            "Misalignment between what is said and how things are actually done",
            "Inconsistently developing innovation capacity",
            "Unclear and demotivating incentives to be innovative",
            "Hard to understand and use system to share ideas and get credit for their success",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Clear, transparent, and timely pathway for sharing new ideas",
            "Alignment between what is said and how things are actually done",
            "Provide consistent development opportunities",
            "Clear and motivating incentives to be innovative",
            "Easy to understand and use system to share ideas and get credit for their success",
          ],
        },
      ],
      significance: `Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your systems practices directly influences the quality of your innovation results and the potential growth trajectory of your team`,
    },
  ],
  innovation_assessment_evaluation: {
    Personal: [],
    Interpersonal: [],
    Team: [],
    Ideation: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Validation: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Adoption: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    System: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
  },

  //Execution
  execution_assessment_progress: 0,
  execution_assessment_questions: [
    //Personal
    {
      number: "01",
      qstn: "I set aspirational goals",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Effective goal setting focuses actions on a specific aspiration",
    },
    {
      number: "02",
      qstn: "I do more with less",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Being efficient with resources is indicative of excellent execution",
    },
    {
      number: "03",
      qstn: "I use a reliable approach to measure my progress",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Effectively measuring progress is foundational to adaptive execution",
    },
    {
      number: "04",
      qstn: "I negotiate effectively with others",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Execution and agility require the ability to negotiate effectively with limited time and, often, in dynamic settings",
    },
    {
      number: "05",
      qstn: "I excel at quickly detecting inefficiencies",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Quickly identifying challenges increases the odds of efficiently solving for them",
    },
    {
      number: "06",
      qstn: "I prioritize my efforts in now, next, then increments",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Prioritizing actions if sprint durations increases the odds of implementation success",
    },
    {
      number: "07",
      qstn: "I focus on quality done quickly, rather than aiming for perfection done slowly",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Slowly seeking perfection is the enemy of great in fast-paced settings",
    },
    {
      number: "08",
      qstn: "I finish the worthwhile pursuits that I start",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Those who persist to complete worthwhile pursuits experience better result on nearly all performance metrics",
    },
    {
      number: "09",
      qstn: "I use more than self-discipline to follow through on my commitments",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Self-discipline is the start, but it must be complemented by accountability mechanisms to achieve the highest execution and agility levels",
    },
    {
      number: "10",
      qstn: "I learn quickly from mistakes",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Learning is always the answer - and learning quickly is preferred",
    },
    {
      number: "11",
      qstn: "I effectively influence others without appealing to titles",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "Appealing to authority is the lowest level of influence whereas other forms of influence are perceived to be more genuine",
    },
    {
      number: "12",
      qstn: "I am reliable",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The willingness and ability to keep commitments is foundational to effective execution",
    },
    {
      number: "13",
      qstn: "I achieve over 80% of the goals I set",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The quality relationship between goal setting and goal achievement should exceed 80% success when the ideal balance of goal ambition and effective execution are in effect",
    },
    {
      number: "14",
      qstn: "I actively seek candid feedback about the effectiveness of my actions",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance:
        "The willingness and ability to attract, implement, and give feedback is vital to effective execution and agility in dynamic settings",
    },
    {
      number: "15",
      qstn: "I quickly adopt the better way",
      category: "Personal",
      options: [
        "Almost always",
        "Often",
        "Sometimes",
        "Rarely",
        "Almost never",
        "Don't know",
      ],
      significance: `There is rarely a "best" but there is always a "better" when it comes to developing, implementing, and adapting execution pathways - those who consistently and quickly seek better have the advantage`,
    },

    //Team
    {
      number: "16",
      qstn: "We set clear, transparent, and impactful goals",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Teams that have clear goals experience better execution alignment",
    },
    {
      number: "17",
      qstn: "We consistently achieve above 90% of the value we plan for",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "On average less than 60% of the value planned for is actually realized so closing this execution gap represents significant value",
    },
    {
      number: "18",
      qstn: "We win deals at a superior rate to our competitors",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance: "Deal win rate influences execution success",
    },
    {
      number: "19",
      qstn: "We rarely experience operational bottlenecks",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Operational bottlenecks increase complexity, waste resources, and reduce output",
    },
    {
      number: "20",
      qstn: "We change our efforts before we change our goals",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "TWhen goals are valid they should be altered only after adjusting the approach to achieve the goal",
    },
    {
      number: "21",
      qstn: "We effectively spread power throughout the organization rather than concentrating it in senior leadership",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "When power is distributed people feel more accountable to and better incentivized to achieve the intended objective",
    },
    {
      number: "22",
      qstn: "We adapt rapidly",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "The power of agility increases as speed and accuracy of sensing and incorporating information updates improves",
    },
    {
      number: "23",
      qstn: "We work effectively across functions",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Execution efforts are known to improve when collaboration across the team is strong",
    },
    {
      number: "24",
      qstn: "Every function in our organization has a clear understanding of how their work relates to our purpose",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "People are more likely to give their best when they know why they are doing it and how it impacts others",
    },
    {
      number: "25",
      qstn: "We focus on progress and results, not politics and task completion",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Politics and tracking tasks completed detract from effective execution because they shift focus from learning and action quality to favoritism and tactivity quantity",
    },
    {
      number: "26",
      qstn: "We have a high trust operating environment",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Trust is foundational to effective execution and this increases as operating setting are more dynamic",
    },
    {
      number: "27",
      qstn: "Effective development is provided for our people to deliver what is asked of them",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Execution excellence requires both the will to commit to delivering on the objective and the skill to do what is required",
    },
    {
      number: "28",
      qstn: "We codify best practices and effectively share them",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Capturing and effectively sharing best practices reduces wasted motion and increases the odds of goal achievement",
    },
    {
      number: "29",
      qstn: "We quickly iterate based on easily understood and reliable evaluation metrics",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Those that have a system for effectively evaluating implementation efforts in the now, next, and then horizons are more likely to positively adapt and achieve goals at a higher rate",
    },
    {
      number: "30",
      qstn: "We effectively prioritize efforts and resources",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Prioritization is pivotal to execution success because know what you don't need to is as important to creating effort focus as knowing what to do",
    },
    {
      number: "31",
      qstn: "We implement plans with precision and discipline",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Knowing what to do is only as valuable as the willingness and ability to do it consistently well",
    },
    {
      number: "32",
      qstn: "Our systems allow for quick and accurate information gathering, analysis, and sharing ",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Systems hinder or accelerate how effectively people are able to execute the actions linked to goal achievement",
    },
    {
      number: "33",
      qstn: "We are clear and transparent - everyone here knows exactly how their contribution impacts our intended results",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Impact transparency improves not only accountability for actions but also the quality of the actions themselves",
    },
    {
      number: "34",
      qstn: "We use resources more efficiently than our competitors",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "All else equal those who maximize the yield from their resources have the advantage",
    },
    {
      number: "35",
      qstn: "We are data-driven - the best idea always wins",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Operating trust increases to the extent people believe that the quality of their actions and the value of their ideas is valued above other social dynamics",
    },
    {
      number: "36",
      qstn: "We effectively learn from failure",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Learning is the answer in both success and failure - and learning quickly is preferred",
    },
    {
      number: "37",
      qstn: "We use mechanisms outside of management controls that hold us accountable for the quality of our actions",
      category: "Team",
      options: [
        "Totally describes us",
        "Mostly describes us",
        "Somewhat describes us",
        "Not much like us",
        "Not at all like us",
        "Don't know",
      ],
      significance:
        "Those who employ accountability mechanisms beyond discipline execute with more precision and adapt better and quicker than those who don't",
    },

    //PO
    {
      number: "38",
      category: "Precision_and_Execution",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Training on building an effective innovation case",
            "Use of a universally understood framework for sharing the potential value of an innovation",
            "Encourage interactions with people who are effective innovation messengers",
            "Reinforce the effective components to innovation messaging",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Underresourcing innovation adoption training",
            "Not having a universally understood framework for sharing the potential value of an innovation",
            "Disouraging interactions with people who aren't your direct manager",
            "Not providing clear guidance on the effective components to innovation messaging",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Provide training on building an effective innovation case",
            "Have a universally understood framework for sharing the potential value of an innovation",
            "Encourage interactions with people who are effective innovation messengers",
            "Making known the effective components to innovation messaging",
          ],
        },
      ],
      significance: `Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your adoption practices directly influences the quality of your innovation results and the potential growth trajectory of your team`,
    },
    {
      number: "39",
      category: "Operational_Agility",
      qstns: [
        {
          qstn: "Continue",
          options: [
            "Clear, transparent, and timely pathway for sharing new ideas",
            "Alignment between what is said and how things are actually done",
            "Consistently developing innovation capacity",
            "Clear and motivating incentives to be innovative",
            "Easy to understand and use system to share ideas and get credit for their success",
          ],
        },
        {
          qstn: "Stop",
          options: [
            "Unclear, obscure, and slow pathway for sharing new ideas",
            "Misalignment between what is said and how things are actually done",
            "Inconsistently developing innovation capacity",
            "Unclear and demotivating incentives to be innovative",
            "Hard to understand and use system to share ideas and get credit for their success",
          ],
        },
        {
          qstn: "Start",
          options: [
            "Clear, transparent, and timely pathway for sharing new ideas",
            "Alignment between what is said and how things are actually done",
            "Provide consistent development opportunities",
            "Clear and motivating incentives to be innovative",
            "Easy to understand and use system to share ideas and get credit for their success",
          ],
        },
      ],
      significance: `Discovering and acting on clear intelligence regarding what to continue, what to stop, and options to consider starting related to your systems practices directly influences the quality of your innovation results and the potential growth trajectory of your team`,
    },
  ],
  execution_assessment_evaluation: {
    Personal: [],
    Team: [],
    Precision_and_Execution: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
    Operational_Agility: {
      Continue: { choices: [], other: "", score: 0 },
      Stop: { choices: [], other: "", score: 0 },
      Start: { choices: [], other: "", score: 0 },
    },
  },
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    //Mindset
    setMindsetAssessmentProgress: (state, action) => {
      state.mindset_assessment_progress = action.payload;
    },
    setMindsetAssessmentEvaluation: (state, action) => {
      // Find and replace or add new
      state.mindset_assessment_evaluation[action.payload.category].find(
        (v) => action.payload.answer.number === v.number
      )
        ? state.mindset_assessment_evaluation[action.payload.category].forEach(
            (v, i) => {
              if (v.number === action.payload.answer.number) {
                state.mindset_assessment_evaluation[action.payload.category][
                  i
                ] = action.payload.answer;
              }
            }
          )
        : state.mindset_assessment_evaluation[action.payload.category].push(
            action.payload.answer
          );
    },
    setMindsetAssessmentPPP: (state, action) => {
      //Choices
      state.mindset_assessment_evaluation[action.payload.category][
        action.payload.section
      ]?.choices.includes(action.payload.choice)
        ? (state.mindset_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices = state.mindset_assessment_evaluation[
            action.payload.category
          ][action.payload.section].choices.filter(
            (choice) => choice !== action.payload.choice
          ))
        : state.mindset_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices.push(action.payload.choice);

      //Scoring
      state.mindset_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.mindset_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.mindset_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },
    setOther: (state, action) => {
      //Others
      state.mindset_assessment_evaluation[action.payload.category][
        action.payload.section
      ].other = action.payload.other;

      //Scoring
      state.mindset_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.mindset_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.mindset_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },

    //Strategy
    setStrategyAssessmentProgress: (state, action) => {
      state.strategy_assessment_progress = action.payload;
    },
    setStrategyAssessmentEvaluation: (state, action) => {
      // Find and replace or add new
      state.strategy_assessment_evaluation[action.payload.category].find(
        (v) => action.payload.answer.number === v.number
      )
        ? state.strategy_assessment_evaluation[action.payload.category].forEach(
            (v, i) => {
              if (v.number === action.payload.answer.number) {
                state.strategy_assessment_evaluation[action.payload.category][
                  i
                ] = action.payload.answer;
              }
            }
          )
        : state.strategy_assessment_evaluation[action.payload.category].push(
            action.payload.answer
          );
    },
    setStrategyAssessmentPR: (state, action) => {
      //Choices
      state.strategy_assessment_evaluation[action.payload.category][
        action.payload.section
      ]?.choices.includes(action.payload.choice)
        ? (state.strategy_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices = state.strategy_assessment_evaluation[
            action.payload.category
          ][action.payload.section].choices.filter(
            (choice) => choice !== action.payload.choice
          ))
        : state.strategy_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices.push(action.payload.choice);

      //Scoring
      state.strategy_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.strategy_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.strategy_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },
    setStrategyOther: (state, action) => {
      //Others
      state.strategy_assessment_evaluation[action.payload.category][
        action.payload.section
      ].other = action.payload.other;

      //Scoring
      state.strategy_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.strategy_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.strategy_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },

    //Innovation
    setInnovationAssessmentProgress: (state, action) => {
      state.innovation_assessment_progress = action.payload;
    },
    setInnovationAssessmentEvaluation: (state, action) => {
      // Find and replace or add new
      state.innovation_assessment_evaluation[action.payload.category].find(
        (v) => action.payload.answer.number === v.number
      )
        ? state.innovation_assessment_evaluation[
            action.payload.category
          ].forEach((v, i) => {
            if (v.number === action.payload.answer.number) {
              state.innovation_assessment_evaluation[action.payload.category][
                i
              ] = action.payload.answer;
            }
          })
        : state.innovation_assessment_evaluation[action.payload.category].push(
            action.payload.answer
          );
    },
    setInnovationAssessmentIVAS: (state, action) => {
      //Choices
      state.innovation_assessment_evaluation[action.payload.category][
        action.payload.section
      ]?.choices.includes(action.payload.choice)
        ? (state.innovation_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices = state.innovation_assessment_evaluation[
            action.payload.category
          ][action.payload.section].choices.filter(
            (choice) => choice !== action.payload.choice
          ))
        : state.innovation_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices.push(action.payload.choice);

      //Scoring
      state.innovation_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.innovation_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.innovation_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },
    setInnovationOther: (state, action) => {
      //Others
      state.innovation_assessment_evaluation[action.payload.category][
        action.payload.section
      ].other = action.payload.other;

      //Scoring
      state.innovation_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.innovation_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.innovation_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },

    //Execution
    setExecutionAssessmentProgress: (state, action) => {
      state.execution_assessment_progress = action.payload;
    },
    setExecutionAssessmentEvaluation: (state, action) => {
      // Find and replace or add new
      state.execution_assessment_evaluation[action.payload.category].find(
        (v) => action.payload.answer.number === v.number
      )
        ? state.execution_assessment_evaluation[
            action.payload.category
          ].forEach((v, i) => {
            if (v.number === action.payload.answer.number) {
              state.execution_assessment_evaluation[action.payload.category][
                i
              ] = action.payload.answer;
            }
          })
        : state.execution_assessment_evaluation[action.payload.category].push(
            action.payload.answer
          );
    },
    setExecutionAssessmentPO: (state, action) => {
      //Choices
      state.execution_assessment_evaluation[action.payload.category][
        action.payload.section
      ]?.choices.includes(action.payload.choice)
        ? (state.execution_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices = state.execution_assessment_evaluation[
            action.payload.category
          ][action.payload.section].choices.filter(
            (choice) => choice !== action.payload.choice
          ))
        : state.execution_assessment_evaluation[action.payload.category][
            action.payload.section
          ].choices.push(action.payload.choice);

      //Scoring
      state.execution_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.execution_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.execution_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },
    setExecutionOther: (state, action) => {
      //Others
      state.execution_assessment_evaluation[action.payload.category][
        action.payload.section
      ].other = action.payload.other;

      //Scoring
      state.execution_assessment_evaluation[action.payload.category][
        action.payload.section
      ].score =
        state.execution_assessment_evaluation[action.payload.category][
          action.payload.section
        ].choices.length +
        (state.execution_assessment_evaluation[action.payload.category][
          action.payload.section
        ].other.length
          ? 1
          : 0);
    },

    resetEvaluation: (state, action) => {
      state.assessmentEvaluation = [];
      state.fundersAssessment = [];
    },
  },
});

export const {
  //Mindset
  setMindsetAssessmentProgress,
  setMindsetAssessmentEvaluation,
  setMindsetAssessmentPPP,
  setOther,
  //Strategy
  setStrategyAssessmentProgress,
  setStrategyAssessmentEvaluation,
  setStrategyAssessmentPR,
  setStrategyOther,
  //Innovation
  setInnovationAssessmentProgress,
  setInnovationAssessmentEvaluation,
  setInnovationAssessmentIVAS,
  setInnovationOther,
  //Execution
  setExecutionAssessmentProgress,
  setExecutionAssessmentEvaluation,
  setExecutionAssessmentPO,
  setExecutionOther,
  //
  resetEvaluation,
} = AppSlice.actions;
export default AppSlice.reducer;
