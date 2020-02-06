<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS events</title>
</head>
<body>
  
    <button id="btn">Click me to load content</button>
  
  
    <script>
        console.clear();
      
        const btn = document.querySelector('#btn');
        var handler = () => {
            console.log('Content loaded');
        }
        // отработает только один раз                   !!!
        btn.addEventListener('click', handler, {once: true});
    </script>
</body>
</html>
