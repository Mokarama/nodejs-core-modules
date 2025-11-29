const fs=require('fs');
const path=require('path');

const sourceDir=path.join(__dirname, 'output', "messy-files");
const organizerDir=path.join(__dirname, 'output', 'organized');

const categories={
    images: [".jpg", ".jpeg", ".svg"],
    document: [".pdf", ".doc", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
     others: [],
    
};

const testFiles=[
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp4",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip"
];

function initializeDirectories(){
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir, { recursive: true});
        testFiles.forEach(file=>{
            fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
        });
        console.log("Messy directories files are created!!!")
    }
}
initializeDirectories()