var app = angular.module('app', ['ui.bootstrap'])
app.controller('app',function ($scope) {
    $scope.Data = {
        thatButton: "collect",
        searchResultTemp :{
            cards: [{
                title: "امتیاز بالابرها",
                story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                color:{"background-color":"orange"}
            },
                {
                    title: "امتیاز بالابرها",
                    story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                    color:{"background-color":"yellow"}
                }
                ,{
                    title: "امتیاز بالابرها",
                    story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                    color:{"background-color":"green"}
                },
                {
                    title: "امتیاز بالابرها",
                    story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                    color:{"background-color":"blue"}
                },
                {
                    title: "امتیاز بالابرها",
                    story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                    color:{"background-color":"red"}
                },
                {
                    title: "امتیاز بالابرها",
                    story: "امتیازت رو ببر بالا، تو لیدربورد رتبت رو ببر بالا",
                    color:{"background-color":"pink"}
                }
            ],
            total_count: 2
        }
    };
    $scope.Func = {
        changeStateCollect : function () {
            if($scope.Data.thatButton != "collect"){
                $scope.Data.thatButton = "collect";
            }
        },
        changeStateSpent : function () {
            if($scope.Data.thatButton != "spent"){
                $scope.Data.thatButton = "spent";
            }
        }

    };
    var Run = function () {
        $(document).ready(function(){
            $('.slider').slick({
                dots:true,
                arrows:false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                autoplaySpeed: 2500,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    }
    Run();
})