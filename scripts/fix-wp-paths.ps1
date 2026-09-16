Get-ChildItem -Filter '*.html' -Recurse | ForEach-Object {
    $c = Get-Content $_.FullName -Raw
    if ($c -match 'index\.htmlwp-') {
        $u = $c.Replace('index.htmlwp-json/', 'wp-json/').Replace('index.htmlwp-admin/', 'wp-admin/')
        Set-Content -Path $_.FullName -Value $u -NoNewline
        Write-Host "Updated: $($_.Name)"
    }
}
