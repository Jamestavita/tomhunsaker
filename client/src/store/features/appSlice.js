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
        "There is a 76% engagement increase when people believe they are in a good position to make a valuable contribution",
    },
    {
      number: "30",
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
        "Positive accountability nearly doubles when people believe that they have the freedom to take decisions are responsible for their results",
    },
    {
      number: "31",
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
        "The more secure people feel in their ability to take calculated risk the wiser decisions they make about risk and the more resilient they are when pursuing them ",
    },
    {
      number: "32",
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
        "Transparent information flow either facilitates or inhibits the speed and reliability with which a team understands and responds to its environment",
    },
    {
      number: "33",
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
      significance: "Teams whose people feel respected report 38% less burnout",
    },
    {
      number: "34",
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
        "Teams whose people believe they are appropriately recognized and rewarded experience nearly 40% higher sales",
    },
    {
      number: "35",
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
            "Share the behind decisions",
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

    //Team
    {
      number: "10",
      qstn: "I seek to understand what others find meaningful",
      category: "Team",
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
      number: "11",
      qstn: "I am trustworthy",
      category: "Team",
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
      number: "12",
      qstn: "I am candid but not contentious",
      category: "Team",
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
      number: "13",
      qstn: "I see the good in others",
      category: "Team",
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
      number: "14",
      qstn: "I am collaborative",
      category: "Team",
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
      number: "15",
      qstn: "I make it easier for others to get things done",
      category: "Team",
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
      number: "16",
      qstn: "I actively find ways to help others maximize their potential",
      category: "Team",
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
      number: "17",
      qstn: "I make others feel that they can share openly with me",
      category: "Team",
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

    //Organization
    {
      number: "18",
      qstn: "Our purpose is authentic, actionable, and widely understood",
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
      qstn: "Over 80% of our people highly recommend being on this team",
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
      qstn: "We are exceptional at developing our people when and how it is needed",
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
        "Teams whose people believe they have access to exceptional development resources outperform their peers by nearly 20%",
    },
    {
      number: "21",
      qstn: "We have lower than industry average turnover among our best people",
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
      qstn: "We attract all of the talent we need",
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
      qstn: "People here are consistently put in the right position to maximize their potential",
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
      qstn: "We adjust our management approach based on the type of change we need to achieve",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
        "Positive accountability nearly doubles when people believe that they have the freedom to take decisions are responsible for their results",
    },
    {
      number: "28",
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
      category: "Organization",
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
      number: "31",
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      qstn: "It is easy to get things done here",
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
      significance: `Fit-to-Purpose is your level of attractiveness to stakeholders. It is the relevance of your value proposition to key stakeholder and answers "How valuable are our actions to key stakeholders?" A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.`,
    },
    {
      number: "39",
      category: "Relative_Advantage",
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
      significance: `Relative Advantage is how much stakeholders prefer you to others. It is your distinctiveness from alternatives and answers "How unique from other options are you viewed by key stakeholders?" A number of statements will be presented to you in three categories: Continue, Stop, and Start. Select all of the statements that apply in each category.`,
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

    resetEvaluation: (state, action) => {
      state.assessmentEvaluation = [];
      state.fundersAssessment = [];
    },
  },
});

export const {
  setMindsetAssessmentProgress,
  setMindsetAssessmentEvaluation,
  setMindsetAssessmentPPP,
  setOther,
  setStrategyAssessmentProgress,
  setStrategyAssessmentEvaluation,
  setStrategyAssessmentPR,
  setStrategyOther,
  resetEvaluation,
} = AppSlice.actions;
export default AppSlice.reducer;
