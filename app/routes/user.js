const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const router = express.Router();
router.use(express.static(path.join(__dirname, '../public')));
const get_worklog_data_service = require('../services/worklog/get_worklog_data_service');
const createUserService = require('../services/user/create_user_service.js');

const { use } = require('./login');

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get('/:user', function(req, res, next) {
  //  res.send('ユーザー' + req.params.user + 'の情報を取得');
  console.log('【start】getFunction', req.params.user)
  const result = get_worklog_data_service.getWorklogData(req.params.user, 2021, 0702)
  res.send(result)
});


router.put('/create', (req, res) => {
  console.log('ユーザーを作成',req.body);
  const result = createUserService.createUser(req.body.username,req.body.password)
  // ステータスコード200:OKを送信
  res.sendStatus(200);
});

module.exports = router;