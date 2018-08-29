# dom 基本操作
    setAttributes("key",value); 设置属性
# input file
    dom属性
        accept="image/png" 仅允许以png为后缀的文件
        accept=".png" 仅允许以png为后缀的文件
        accept="image/png, image/jpeg" 仅允许以png或jpeg为后缀的文件
        accept=".png,.jpeg" 仅允许以png或jpeg为后缀的文件
        accept="image/*" 仅允许图像文件
    dom事件
        onchange
            文件改变时触发
## 移除已选择文件
    dom.value="";
## 读取文件
    FileReader 方法
        FileReader.abort()
            中止读取操作。
            在返回时，readyState属性为DONE。
        FileReader.readAsArrayBuffer()
            开始读取指定的 Blob中的内容, 
            一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.
        FileReader.readAsBinaryString() 
            开始读取指定的Blob中的内容。
            一旦完成，result属性中将包含所读取文件的原始二进制数据。
        FileReader.readAsDataURL()
            开始读取指定的Blob中的内容。
            一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
        FileReader.readAsText()
            开始读取指定的Blob中的内容。
            一旦完成，result属性中将包含一个字符串以表示所读取的文件内容。 
## 读取已选择图片文件并显示             
    var element = document.getElementById("fileTest");
    element.onchange = function (event) {
        var files = event.target.files;
        if (files && files.length > 0) {
            // 当前选择文件
            var file = files[0];
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                // 读取结果
                console.log(event.target.result);
                var image = new Image();
                image.src = event.target.result;
                document.body.appendChild(image);
            };
            // 读取图片文件
            fileReader.readAsDataURL(file);
        } else {
            console.log("未选择文件");
        }
    };
## 参考
> [Blob - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)           
> [FileList - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)           
> [FileReader - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)           
> [<input type="file"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)           
