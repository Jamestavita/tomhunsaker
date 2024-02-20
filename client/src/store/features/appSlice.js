import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        "People are more likely to choose, be candid with, and are more loyal to those they believe genuinely care about their interests",
    },
    {
      number: "12",
      qstn: "I am trustworthy",
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
        "People who are viewed as trustworthy (measured by competence, integrity, and benevolence) consistently rank high on desired team member metrics",
    },
    {
      number: "13",
      qstn: "I am candid but not contentious",
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
        "The ability to have difficult conversations without causing or taking offense is known to improve team dynamics",
    },
    {
      number: "14",
      qstn: "I see the good in others",
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
        "The ability to work well with others is rooted in valuing what they can contribute",
    },
    {
      number: "15",
      qstn: "I am collaborative",
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
        "Relational effectiveness improves when common ground is found",
    },
    {
      number: "16",
      qstn: "I make it easier for others to get things done",
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
        "Teams comprised of members who seek more efficiently ways for the group to work are known to achieve better results",
    },
    {
      number: "17",
      qstn: "I actively find ways to help others maximize their potential",
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
        "Teams comprised of members who actively facilitate the success of others are known to achieve better results",
    },
    {
      number: "18",
      qstn: "I make others feel that they can share openly with me",
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
        "The quality and frequency of information shared is directly influenced by the level of trust felt among team members",
    },
    {
      number: "19",
      qstn: "I deliver on my commitments",
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
        "People who come through with their part are preferred by their peers",
    },
    {
      number: "20",
      qstn: "I improve the well-being of those around me",
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
        "Research shows that preference is given to those who help others feel good when they're around them",
    },

    //More
    {
      add_more: false,
      number: "31",
      qstn: "This best describes how our stakeholders view us",
      qstns: [
        {
          qstn: "Customer",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Employees",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Partners",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
        {
          qstn: "Community (social and regulatory)",
          options: [
            "Essential",
            "Important",
            "Useful",
            "Ambivalent",
            "Harmful",
          ],
        },
      ],
    },

    {
      add_more: false,
      number: "35",
      qstn: "This is what we solve and for whom",
      qstns: [
        {
          qstn: "In order to",
          placeholder: "X - insert the problem",
        },
        {
          qstn: "We",
          placeholder: "Y - how do you solve the need",
        },
        {
          qstn: "better than anyone else for",
          placeholder: "Z - who is your target customer audience",
        },
      ],
    },

    {
      add_more: false,
      number: "37",
      qstn: "This is how our model works",
      qstns: [
        {
          qstn: "We offer A ",
          placeholder: "what is your product or service?",
        },
        {
          qstn: "to B",
          placeholder: "who is your target customer?",
        },
        {
          qstn: "that we produce by C",
          placeholder: "how is it built?",
        },
        {
          qstn: "and sell by D",
          placeholder: "how is it distributed?",
        },
        {
          qstn: "using E pay structure",
          placeholder: "what is the revenue model?",
        },
        {
          qstn: "resulting in F % return",
          placeholder: "what is the sales margin?",
        },
        {
          qstn: "while upholding G",
          placeholder: "(what are three important values to your firm?",
        },
      ],
    },
    {
      add_more: false,
      number: "42",
      qstns: [
        {
          qstn: "What do you do?",
          placeholder: "In 1-2 sentences describe what your business does",
        },
        {
          qstn: "What challenges do your customers face?",
          placeholder:
            "In 1-2 sentences describe what challenge your business solves",
        },
        {
          qstn: "How do you distinguish yourself?",
          placeholder:
            "In 1-2 sentences highlight how your business is distinct from others",
        },
      ],
    },
  ],
  mindset_assessment_evaluation: {
    personal: [],
    interpersonal: [],
    team: [],
    people: [],
    position: [],
    purpose: [],
  },
  fundersAssessment: [],
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setMindsetAssessmentProgress: (state, action) => {
      state.mindset_assessment_progress = action.payload;
    },
    setFoundersAssessmentStarted: (state, action) => {
      state.foundersAssessmentStarted = action.payload;
      state.fundersAssessmentStarted = false;
    },
    setFundersAssessmentProgress: (state, action) => {
      if (state.fundersAssessmentProgress < 100) {
        state.fundersAssessmentProgress = action.payload;
      }
    },
    setFundersAssessmentStarted: (state, action) => {
      state.fundersAssessmentStarted = action.payload;
      state.foundersAssessmentStarted = false;
    },
    setAssessmentEvaluation: (state, action) => {
      // Find and replace or add new
      if (state.fundersAssessmentStarted === true) {
        state.fundersAssessment.find(
          (v) => action.payload.qstnNumber === v.qstnNumber
        )
          ? state.fundersAssessment.forEach((v, i) => {
              if (v.qstnNumber === action.payload.qstnNumber) {
                state.fundersAssessment[i] = action.payload;
              }
            })
          : state.fundersAssessment.push(action.payload);
      }
      if (state.foundersAssessmentStarted === true) {
        state.assessmentEvaluation.find(
          (v) => action.payload.qstnNumber === v.qstnNumber
        )
          ? state.assessmentEvaluation.forEach((v, i) => {
              if (v.qstnNumber === action.payload.qstnNumber) {
                state.assessmentEvaluation[i] = action.payload;
              }
            })
          : state.assessmentEvaluation.push(action.payload);
      }
    },
    resetEvaluation: (state, action) => {
      state.assessmentEvaluation = [];
      state.fundersAssessment = [];
    },
  },
});

export const { setMindsetAssessmentProgress, resetEvaluation } =
  AppSlice.actions;
export default AppSlice.reducer;
