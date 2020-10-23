<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Form input data</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <header>
        <a href="/"><img src="{{ asset('img/logo-ibis.png')}}"></img></a>
    </header>
    <div class="card">
        <div class="card-title">
            <h2>Silahkan Isi Tempat Wisata yang ingin ditampilkan pada website sisi klien</h2>
        </div>
        <form action='/testing/kirim' method='post'>
            {{ csrf_field() }}
            <label>Nama Tester : </label></br>
            <input type="text" name="nama_tester" required="required"></br>
            <label>Alamat : </label></br>
            <input type="text" name="alamat" required="required"></br>
            <button type="submit" class="button-confirm">Tambahkan</button>
        </form>
    </div>
    <footer>
        <div className="bottom-footer">
            <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span class="heart-icon">&hearts;</span></p> 
        </div>
    </footer>
    <script>
        let time = new Date();
        let years = time.getFullYear();
        document.getElementById("years").innerHTML = years;
    </script>
</body>
</html>