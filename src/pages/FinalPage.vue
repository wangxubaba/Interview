<template>
    <div id="content" v-bind:style="{width:window_width+'px',height:window_height+'px'}">
        <table>
            <tr>
                <td colspan="2">
                    <div v-bind:style="{width:window_width/3-20+'px',height: '1px',backgroundColor:'white'}"></div>
                </td>
                <th colspan="2" style="font-size: 28px;-webkit-text-fill-color: white;padding: 2px">招商银行候选人/面试官状态时时监控图</th>
                <td colspan="2">
                    <div v-bind:style="{width:window_width/3-20+'px',height: '1px',backgroundColor:'white'}"></div>
                </td>
            </tr>
            <tr>
                <td><Province></Province></td>
                <td><Promotion></Promotion></td>
                <td colspan="2" rowspan="2"><Recruitment></Recruitment></td>
                <td colspan="2"><Interviewer></Interviewer></td>
            </tr>
            <tr>
                <td><Radar_1></Radar_1></td>
                <td><Radar_2></Radar_2></td>
                <td colspan="2"><Candidate></Candidate></td>
            </tr>
            <tr>
                <td colspan="3"><Key></Key></td>
                <td colspan="3"><Candiviewer></Candiviewer></td>
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
td{
    padding: 0px;
    margin: 0;
}
    #content{
        background-color: black;
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>