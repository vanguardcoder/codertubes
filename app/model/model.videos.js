module.exports  = (sequelize, Sequelize) => {
    const Video = sequelize.define('video', {
        name: {type: Sequelize.STRING},
        age: {type: Sequelize.INTEGER},
        active: {type: Sequelize.BOOLEAN, defaultValue: false},
    } );

    return Video;
}
