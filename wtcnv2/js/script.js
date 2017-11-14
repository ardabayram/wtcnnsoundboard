var extension = '.mp3';
var soundFolder = 'sounds/';

var data = [
  {
      says: 'ananin amcigiymis yani',
      id: 'amcigiymis',
      url: soundFolder + 'amcigiymis' + extension
  },
  {
      says: 'ya ananin amiymis siktir git ya',
      id: 'amiymis',
      url: soundFolder + 'amiymis' + extension
  },
    {
        says: 'anan mal orospu cocugu',
        id: 'anann',
        url: soundFolder + 'anann' + extension
    },
    {
        says: 'annadim abeeee',
        id: 'annadimabe',
        url: soundFolder + 'annadimabe' + extension
    },
    {
        says: 'circle help us a lot, a lots of help us circle',
        id: 'circle',
        url: soundFolder + 'circle' + extension
    },
    {
        says: 'ananin ami ben daha seni gormedim orospu cocugu',
        id: 'gormedim',
        url: soundFolder + 'gormedim' + extension
    },
    {
        says: 'hosgeldin orospu cocugu :)',
        id: 'hosgeldin',
        url: soundFolder + 'hosgeldin' + extension
    },
    {
        says: 'siparisiniz iptal olmus, ananin ami iptal olmustur gavat',
        id: 'iptal',
        url: soundFolder + 'iptal' + extension
    },
    {
        says: 'ya siktir git kac kere vurucam amina koyayim ya',
        id: 'kackere',
        url: soundFolder + 'kackere' + extension
    },
    {
        says: 'ha ben orospu cocuguyum',
        id: 'orospucocuguyum',
        url: soundFolder + 'orospucocuguyum' + extension
    },
    {
        says: 'oynucaginiz oyunu sikeyim orospu cocuklari',
        id: 'oyunusikim',
        url: soundFolder + 'oyunusikim' + extension
    },
    {
        says: 's2k',
        id: 's2k',
        url: soundFolder + 's2k' + extension
    },
    {
        says: 'YA SIKTIEER GIT',
        id: 'siktirgit',
        url: soundFolder + 'siktirgit' + extension
    },
    {
        says: '3000. ABONE OZEL',
        id: '3000abone',
        url: soundFolder + '3000abone' + extension
    },
    {
        says: 'ama neden?',
        id: 'amaneden',
        url: soundFolder + 'amaneden' + extension
    },
    {
        says: 'siktir git amina kodumun cocugu ya ananin amina gul sikicem simdi belani SUUUUUS',
        id: 'gul',
        url: soundFolder + 'gul' + extension
    },

  ];

function play(id) {
    var soundNode = document.getElementById(id);
    soundNode.currentTime = 0;
    soundNode.play();
}

function appendSoundboardToHTML() {
    var soundboardDOM = document.getElementById('soundboard');
    var soundboardInnerHTML = '';
    var soundboardNode = '';
    var audioNode = '';
    var curr;

    for (var i = 0; i < data.length; i++) {
        curr = data[i];
        var audioElemId = 'audio-' + curr.id;
        soundboardNode = '<div class=soundboardNode id=' + curr.id + ' onclick=play(\'' + audioElemId + '\')>';
        soundboardNode += curr.says;

        // Make audio HTML element and append it to current soundboard node
        audioNode = '<audio id=' + audioElemId + '><source src=' + curr.url + '></audio>';
        soundboardNode += audioNode;
        soundboardNode += '</div>';
        soundboardInnerHTML += soundboardNode;
    }

    soundboardDOM.innerHTML = soundboardInnerHTML;
}

appendSoundboardToHTML();
