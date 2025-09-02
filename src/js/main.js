"use strict";

// Array  Object
const questions = [
    {
        question: "What is the city of france?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Tokyo", correct: false},
            {text: "Milan", correct: false}
        ]
    },
     {
        question: "What is the city of Milan?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Tokyo", correct: false},
            {text: "Milan", correct: true}
        ]
    },
     {
        question: "What is the city of japan?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Milan", correct: false}
        ]
    }
]

const timer = document.getElementById("#runTime");
const mainQuestion = document.getElementById("#mainQuestion");
const showAnswer = document.getElementById("#answer");
const nextBtn = document.getElementById("#nextBtn");