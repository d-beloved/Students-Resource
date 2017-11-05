//this holds the main route
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  
  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home'
  });

});

export default router;
