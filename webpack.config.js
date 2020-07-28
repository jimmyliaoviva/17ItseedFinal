const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
membersLinks = [
    {
        "id": "oneone",
        "url": "1-1.jpg",
        "name": "1-1 黃鴻琪",
        "tag": [
            "科技宅",
            "專業的嚴師與溫柔小白兔綜合體",
            "認真工作認真玩"
        ],
        "future": "從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業PM發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。",
        "learned": "很享受一群人吵吵鬧鬧，熱鬧自在的那種氣氛，一起共度許多專案的苦，雖然不是每個專案都有好結果，雖然因為疫情阻止我們時常相聚，但也因此我們更珍惜每次相遇的時刻，每個在一起的回憶更加刻苦銘心，一年下來，帶走了回憶，提升了自己，更認識自我，還有一群超讚的夥伴一同繼續走下去。"
    },
    {
        "id": "onetwo",
        "url": "1-2.jpg",
        "name": "1-2 蔡佩珊",
        "tag": ["快樂","自由","還是自由"],
        "future": "不管在什麼產業，我想當一顆小螺絲釘，不起眼卻重要、很累卻很踏實、也許無聊但我很懂自得其樂，所以沒關係的；也許戲棚站久了就是我的，或也有可能我腳麻掉，反正最後，如果哪一天生鏽了就好好養老吧。",
        "learned": "如何溫柔待人，尊重每個人的決定不強求、自己不卑微、別人也不難做，還有各種的硬實力、軟實力，加上不斷的思考、紀錄、反省、檢討，臨近結業的時候，還學會了如何有事沒事就開車。"
    },
    // {
    //     id: "onethree",
    //     url: '1-3.jpg',
    //     tag: [
    //         '行銷',
    //         '話題車手',
    //         '至鬱系男子'
    //     ],
    //     name:'1-3 陳建廷',
    //     learned: '當工作失火，會有人笑你，會有人救你，資種夥伴則是邊笑邊救你。 33 說「我的世界就是 0 和 1 組成的！」而我才真正學會合作需要理解和溝通；Dash說「閉嘴！快寫！」告訴我行動的理由只需要一個；吉米在深夜叫我想想他，我會比較好過，謝謝，真的好很多：） ps. 吉米的等價交換：用靈魂交換官網'
    // },
    // {
    //     id: "onefour",
    //     url: '1-4.jpg',
    //     tag: [
    //         '科技宅',
    //         '專業的嚴師與溫柔小白兔綜合體',
    //         '認真工作認真玩'
    //     ],
    //     name:'1-4 蔡珮歆',
    //     future: '雖然是放棄教程的師培生，但只是因為知道自己不會當體制內老師，不想浪費時間。目前想先做看看行銷、UI/UX 兩個職位，但隱約覺得自己最終還是會想回到教育或社會企業，成就自己也成就他人。', 
    //     learned: '學習更勇敢表達、並且相信他人會接受這樣的自己。和同溫層以外的人交朋友起初都會覺得彼此頻率不合，但只要跨過那道坎就會發現自己交了一群超級稀有又珍貴的朋友。'
    // },
    // {
    //     id: "onefive",
    //     url: '1-5.jpg',
    //     tag: [
    //         '科技宅',
    //         '專業的嚴師與溫柔小白兔綜合體',
    //         '認真工作認真玩'
    //     ],
    //     name:'1-1 黃鴻琪',
    //     future: '從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業PM發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。',  
 
    // },
    // {
    //     id: "oneseven",
    //     url: '1-7.jpg',
    //     tag: [
    //         '科技宅',
    //         '專業的嚴師與溫柔小白兔綜合體',
    //         '認真工作認真玩'
    //     ],
    //     name:'1-1 黃鴻琪',
    //     future: '從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業PM發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。',  
 
    // },
    // {
    //     id: "twoone",
    //     url: '2-1.jpg',
    //     tag: [
    //         '科技宅',
    //         '專業的嚴師與溫柔小白兔綜合體',
    //         '認真工作認真玩'
    //     ],
    //     name:'1-1 黃鴻琪',
    //     future: '從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業PM發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。',  
 
    // },
    // {
    //     id: "twotwo",
    //     url: '2-2.jpg',
    //     tag: [
    //         '科技宅',
    //         '專業的嚴師與溫柔小白兔綜合體',
    //         '認真工作認真玩'
    //     ],
    //     name:'1-1 黃鴻琪',
    //     future: '從小就懷有一個創業夢，希望透過科技幫助世界解決問題，喜歡挑戰自己，目前規劃先往科技業PM發展，磨練自己累積實力，增加自己的能力，有機會也期待出國闖蕩，見識不一樣的環境，突破自我。',  
 
    // },
    // {
    //     id: "twothree",
    //     url: '2-3.jpg'
    // },
    // {
    //     id: "twofour",
    //     url: '2-4.jpg'
    // },
    // {
    //     id: "twofive",
    //     url: '2-5.jpg'
    // },
    // {
    //     id: "twosix",
    //     url: '2-6.jpg'
    // },
    // {
    //     id: "twoseven",
    //     url: '2-7.jpg'
    // },
    // {
    //     id: "threeone",
    //     url: '3-1.jpg'
    // },
    // {
    //     id: "threetwo",
    //     url: '3-2.jpg'
    // },
    // {
    //     id: "threethree",
    //     url: '3-3.jpg'
    // },
    // {
    //     id: "threefour",
    //     url: '3-4.jpg'
    // },
    // {
    //     id: "threefive",
    //     url: '3-5.jpg'
    // },
    // {
    //     id: "threesix",
    //     url: '3-6.jpg'
    // },
    // {
    //     id: "threeseven",
    //     url: '3-7.jpg'
    // },
    // {
    //     id: "foureone",
    //     url: '4-1.jpg'
    // },
    // {
    //     id: "fourtwo",
    //     url: '4-2.jpg'
    // },
    // {
    //     id: "fourthree",
    //     url: '4-3.jpg'
    // },
    // {
    //     id: "fourfour",
    //     url: '4-4.jpg'
    // },
    // {
    //     id: "fourfive",
    //     url: '4-5.jpg'
    // },
    // {
    //     id: "fourseven",
    //     url: '4-7.jpg'
    // },
    // {
    //     id: "fiveone",
    //     url: '5-1.jpg'
    // },
    // {
    //     id: "fivetwo",
    //     url: '5-2.jpg'
    // },
    // {
    //     id: "fivethree",
    //     url: '5-3.jpg'
    // },
    // {
    //     id: "fivefour",
    //     url: '5-4.jpg'
    // },
    // {
    //     id: "fivefive",
    //     url: '5-5.jpg'
    // },
    // {
    //     id: "fivesix",
    //     url: '5-6.jpg'
    // },
    // {
    //     id: "fiveseven",
    //     url: '5-7.jpg'
    // },


]



membersData = [
    {

    }
]



module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: [
            './src/scripts/pages/index.js',
            "./src/styles/pages/index.scss"
        ],
        members: [
            './src/scripts/pages/members.js',
            './src/styles/pages/members.scss'
        ],
        project_career: [
            './src/scripts/pages/project_career.js',
            './src/styles/pages/project_career.scss'
        ],
        project_recruit: [
            './src/scripts/pages/project_recruit.js',
            './src/styles/pages/project_recruit.scss'
        ],
        project_tb: [
            './src/scripts/pages/project_tb.js',
            './src/styles/pages/project_tb.scss'
        ],
        project_tuv: [
            './src/scripts/pages/project_tuv.js',
            './src/styles/pages/project_tuv.scss'
        ],
        errorPage: [
            './src/scripts/pages/errorPage.js',
            './src/styles/pages/errorPage.scss'
        ],
    },
    // entry:entries,
    // output: {
    //     filename: 'js/[name].[chunkhash:8].js',
    //     path: __dirname + '/dist'
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/members.html',
            filename: 'members.html',
            chunks: ['members'],
            membersLinks: membersLinks,
        }),
        new HtmlWebpackPlugin({
            template: './src/project_career.html',
            filename: 'project_career.html',
            chunks: ['project_career']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_recruit.html',
            filename: 'project_recruit.html',
            chunks: ['project_recruit']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tb.html',
            filename: 'project_tb.html',
            chunks: ['project_tb']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tuv.html',
            filename: 'project_tuv.html',
            chunks: ['project_tuv']
        }),
        new HtmlWebpackPlugin({
            template: './src/errorPage.html',
            filename: 'errorPage.html',
            chunks: ['errorPage']
        }),
    ],
    // plugins: html,
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        // {
        //     test: /\.html$/,
        //     loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
        // }, 
        {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
        port: 3000
    }

};