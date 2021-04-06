import Vue from 'vue'
import Router from 'vue-router'
import CandidateInterviewPage from "@/pages/CandidateInterviewPage";
import InterviewerEvaluationPage from "@/pages/InterviewerEvaluationPage";
import KeyWordsPage from "@/pages/KeyWordsPage";
import Radar_1Page from "@/pages/Radar_1Page";
import Radar_2Page from "@/pages/Radar_2Page";
import RecruitmentDistributionPage from "@/pages/RecruitmentDistributionPage";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/candidate',
      name: 'CandidateInterviewPage',
      component: CandidateInterviewPage
    },
    {
      path: '/interviewer',
      name: 'InterviewerEvaluationPage',
      component: InterviewerEvaluationPage
    },
    {
      path: '/key',
      name: 'KeyWordsPage',
      component: KeyWordsPage
    },
    {
      path: '/radar/1',
      name: 'Radar_1Page',
      component: Radar_1Page
    },
    {
      path: '/radar/2',
      name: 'Radar_2Page',
      component: Radar_2Page
    },
    {
      path: '/recruitment',
      name: 'RecruitmentDistributionPage',
      component: RecruitmentDistributionPage
    }
  ]
})
