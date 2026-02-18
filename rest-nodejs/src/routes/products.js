import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    const items = [ {id: 1, name: 'Keyboard'}, {id: 2, name: 'Mouse'}];
    res.json({data: items});
});
export default router;