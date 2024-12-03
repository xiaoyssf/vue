<template>
    <div class="content">
        <header class="header-title">商户解冻资金申诉材料</header>
        <el-form style="width: 100%;max-width: 900px;" :model="form" label-width="130">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="商户名">
                        <el-input v-model="form.name" placeholder="请输入商户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="商户号">
                        <el-input v-model="form.name" placeholder="请输入商户号" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="联系人姓名">
                        <el-input v-model="form.name" placeholder="请输入联系人姓名" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系人手机号">
                        <el-input v-model="form.name" placeholder="请输入联系人手机号" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="法人/负责人">
                        <el-input v-model="form.name" placeholder="请输入法人/负责人" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="身份证号码">
                        <el-input v-model="form.name" placeholder="请输入身份证号码" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="结算银行卡号">
                        <el-input v-model="form.name" placeholder="请输入结算银行卡号" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开户姓名">
                        <el-input v-model="form.name" placeholder="请输入开户姓名" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="支付类型">
                        <el-select v-model="form.region" placeholder="请选择支付类型">
                            <el-option label="微信" value="微信" />
                            <el-option label="支付宝" value="支付宝" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="支付时间">
                        <el-date-picker v-model="form.date1" type="date" placeholder="请选择支付时间" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="营业执照">
                <input ref="fileUpload" style="display: none;" type="file" id="fileUpload"
                    accept=".png,.jpg,.jpeg,.bmp,.gif" @change="fileChange($event)">
                <div>
                    <img v-if="state.idFile" :src="state.idFile" alt="" class="card">
                    <div v-else class="cardTemplate card" @click="changeFile('id')">
                        <img src="/src/assets/cardIcon.svg" alt="" class="card-icon">
                        <div class="card-text">上传身份证正面</div>
                    </div>
                </div>
                <div style="margin-left: 20px;">
                    <img v-if="state.idFileDif" :src="state.idFileDif" alt="" class="card">
                    <div v-else class="cardTemplate card" @click="changeFile('idDif')">
                        <img src="/src/assets/cardIcon.svg" alt="" class="card-icon">
                        <div class="card-text">上传身份证反面</div>
                    </div>
                </div>
            </el-form-item>

            <el-form-item label="营业执照">
                <el-upload v-model:file-list="state.fileList" :limit="1"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false"
                    list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                    <div class="" @click="changeFile(1)">
                        <img src="/src/assets/card.svg" alt="" class="card-business-icon">
                        <div class="card-text">上传身份证正面</div>
                    </div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交申诉</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const fileUpload = ref()
const url = ref('')
const state = reactive({
    type: '',
    fileList: [],
    idFile: '', // 身份证
    idFileDif: '',
    cardFile: '', //银行卡
    cardFileDif: '',
    businessFile: '', // 营业执照
    storeFile: '', // 店铺门头
    storeRoomFile: '', // 店铺内景
})
const fileChange = (e) => {
    const target = e.target
    // if (target.files && target.files[0]) {
    //     file.value = target.files[0];
    // }

    let reader = new FileReader();

    reader.readAsDataURL(target.files[0]);
    reader.onloadend = function (e) {

        switch (state.type) {
            case 'id':
                state.idFile = e.target.result; break;
            case 'idDif':
                state.idFileDif = e.target.result; break;
            // case 3:
            //     topPageRoute = '/mallList'; break;
            // case 4:
            //     topPageRoute = '/mine'; break;
        }
    };

    console.log(target, target.files[0]);

};

const changeFile = (val) => {
    state.type = val
    fileUpload.value.click()
}


const onSubmit = () => {
    console.log('submit!')
}
</script>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px 80px 0;
    display: flex;
    align-items: center;
    flex-direction: column;


    .header-title {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 4px;
        color: #323233;
        margin-bottom: 20px;

    }

    .card {
        width: 344px;
        height: 192px;
    }

    .cardTemplate {
        background: #F9FAFB;
        border: 2px dashed #D1D5DB;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

    }

    .card-icon {
        width: 37px;
        height: 36px;
    }

    .card-business-icon {
        width: 22px;
        height: 36px;
    }

    .card-text {
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0px;
        color: #6B7280;
    }
}
</style>
