<template>
    <div>
        <table>
            <tr>
                <td><Province></Province></td>
                <td><Promotion></Promotion></td>
                <td colspan="2" rowspan="2"><Recruitment></Recruitment></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td colspan="3"></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Province from "@/pages/ProvinceDistributionPage";
    import Promotion from "@/pages/PromotionStatusPage";
    import Recruitment from "@/pages/RecruitmentDistributionPage";
    import Key from "@/pages/KeyWordsPage";
    import Radar_1 from "@/pages/Radar_1Page";
    import Radar_2 from "@/pages/Radar_2Page";
    import Candidate from "@/pages/CandidateInterviewPage";
    import Candiviewer from "@/pages/CandidateAndInterviewerPage";
    import Interviewer from "@/pages/InterviewerEvaluationPage";
    export default {
        name: "FinalPage",
        // eslint-disable-next-line vue/no-unused-components
        components:{Province,Promotion,Recruitment,Key,Radar_1,Radar_2,Candidate,Candiviewer,Interviewer},
        mounted(){

        },
        data(){
            return{
                window_width:window.innerWidth-20,
                window_height:window.innerHeight-20
            }
        }
    }
</script>

<style scoped>
.insert{
    margin-left: 30%;
}
</style>