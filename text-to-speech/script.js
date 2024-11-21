const textInput = document.getElementById('text');
const voiceSelect = document.getElementById('voiceSelect');
const speakButton = document.getElementById('speakButton');
const downloadButton = document.getElementById('downloadButton');

function speak() {
    if (textInput.value !== '') {
        const text = encodeURIComponent(textInput.value);
        const lang = voiceSelect.value;
        const audioUrl = `https://api.voicerss.org/?key=1fb7f4956d2d4df88c4f3f836721796b&src=${text}&hl=${lang}&r=-3&c=wav`;

        const audio = new Audio(audioUrl);
        audio.play();
    }
}

function download() {
    if (textInput.value !== '') {
        const text = encodeURIComponent(textInput.value);
        const lang = voiceSelect.value;
        const audioUrl = `https://api.voicerss.org/?key=1fb7f4956d2d4df88c4f3f836721796b&src=${text}&hl=${lang}&r=-3&c=wav`;

        const a = document.createElement('a');
        a.href = audioUrl;
        a.download = 'speech.wav';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

speakButton.addEventListener('click', speak);
downloadButton.addEventListener('click', download);