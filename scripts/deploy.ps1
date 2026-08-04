# Deploy a GitHub Pages (rama gh-pages) desde dist/
# Uso: .\scripts\deploy.ps1

param(
    [Parameter(Mandatory = $true)]
    [string]$Token
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "Building..." -ForegroundColor Cyan
npm run build

Remove-Item -Recurse -Force dist\.git -ErrorAction SilentlyContinue

Write-Host "Preparing gh-pages commit..." -ForegroundColor Cyan
git -c credential.helper= -c user.name="Rafa Ceccotti" -c user.email="cecrafa4@gmail.com" -C dist init
git -c credential.helper= -C dist add .
git -c credential.helper= -C dist commit -m "Deploy portfolio $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

Write-Host "Pushing to gh-pages..." -ForegroundColor Cyan
git -c credential.helper= -C dist push -f "https://x-access-token:${Token}@github.com/RafaCeccotti-Dev/portfolio-rafa.git" HEAD:gh-pages

Write-Host "Listo: https://rafaceccotti-dev.github.io/portfolio-rafa/" -ForegroundColor Green
