const validator = require('fastest-validator');
const models = require('../models');

function save(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.userData.user
    }

    console.log(req.userData);0.

    const schema = {

        title: {type: "string", optional:false, max: "100"},
        content: {type: "string", optional:false, max: "500"},
        categoryId: {type: "number", optional:false}
    }

    const v = new validator();
    const validationRespnse = v.validate(post, schema);

    if(validationRespnse !== true){
        return res.status(400).json({
            message: "Validation Failed!",
            errors: validationRespnse
        })
    }


    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post Created Successfully!",
            post: result
        });
    }).catch(error => {

        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Post doesn't exist!"
            })
        }
        //res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error:error
        });
    });
}

function index(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error:error
        })
    });
}

function update(req,res){
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
    }

    const userId = req.userData.user;

    const schema = {

        title: {type: "string", optional:false, max: "100"},
        content: {type: "string", optional:false, max: "500"},
        categoryId: {type: "number", optional:false}
    }

    const v = new validator();
    const validationRespnse = v.validate(updatedPost, schema);

    if(validationRespnse !== true){
        return res.status(400).json({
            message: "Validation Failed!",
            errors: validationRespnse
        })
    }

    models.Post.update(updatedPost, {where: {id: id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Post Edited Sucessfully!",
            post: updatedPost
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}

function destroy(req, res){
    const id = req.params.id;
    const userId = req.userData.userId;

    models.Post.destroy({where:{id: id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Post Deleled Sucessfully!"
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    })
}
module.exports = {
    save:save,
    show:show,
    index:index,
    update:update,
    destroy:destroy
}
