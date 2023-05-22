const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GameModel = new Schema(
    {
        user1Details: {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserSchema",
                default: null
            },
            userCurrentQuestionNumber: {
                type: Number,
                default: 0
            },
            userScore: {
                type: Number, default: 0
            }
        },
        user2Details: {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserSchema",
                default: null
            },
            userCurrentQuestionNumber: {
                type: Number,
                default: 0
            },
            userScore: {
                type: Number, default: 0
            }
        },
        winner:{
            type:mongoose.Schema.Types.ObjectId,
            default:null
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("gameModel", GameModel);