Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "FULL PROJECT DIAGNOSTIC REPORT" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check Node.js and NPM versions
Write-Host "1. ENVIRONMENT CHECK" -ForegroundColor Yellow
Write-Host "-------------------"
node --version
npm --version
pnpm --version
Write-Host ""

# 2. Check workspace structure
Write-Host "2. WORKSPACE STRUCTURE" -ForegroundColor Yellow
Write-Host "---------------------"
Write-Host "Root directory: $(Get-Location)"
Write-Host ""
Write-Host "Main folders:"
Get-ChildItem -Directory | ForEach-Object { Write-Host "  - $($_.Name)" }
Write-Host ""

# 3. Check node_modules status
Write-Host "3. NODE_MODULES STATUS" -ForegroundColor Yellow
Write-Host "---------------------"
if (Test-Path "node_modules") {
    Write-Host "[OK] node_modules directory exists"
    $count = (Get-ChildItem -Path "node_modules" -Directory | Measure-Object).Count
    Write-Host "     Contains ~$count packages"
} else {
    Write-Host "[ERROR] node_modules directory NOT found"
}
Write-Host ""

# 4. Check critical dependencies
Write-Host "4. CRITICAL DEPENDENCIES CHECK" -ForegroundColor Yellow
Write-Host "------------------------------"
$deps = @("vite", "react", "react-dom", "tailwindcss", "@tailwindcss/vite", "lightningcss")
foreach ($dep in $deps) {
    $depPath = "node_modules/$dep"
    if (Test-Path $depPath) {
        $pkgPath = "$depPath/package.json"
        if (Test-Path $pkgPath) {
            $content = Get-Content $pkgPath | ConvertFrom-Json
            Write-Host "[OK] $dep - v$($content.version)"
        }
    } else {
        Write-Host "[MISSING] $dep - NOT FOUND"
    }
}
Write-Host ""

# 5. Check for native binaries
Write-Host "5. NATIVE BINARIES CHECK" -ForegroundColor Yellow
Write-Host "------------------------"
$natives = @("lightningcss.win32-x64-msvc.node", "esbuild.exe")
foreach ($native in $natives) {
    $found = Get-ChildItem -Recurse -Filter $native -ErrorAction SilentlyContinue | Measure-Object | Select-Object -ExpandProperty Count
    if ($found -gt 0) {
        Write-Host "[OK] $native - Found (count: $found)"
    } else {
        Write-Host "[MISSING] $native - NOT FOUND"
    }
}
Write-Host ""

# 6. Check vite config
Write-Host "6. VITE CONFIGURATION CHECK" -ForegroundColor Yellow
Write-Host "----------------------------"
$viteConfigs = Get-ChildItem -Recurse -Filter "vite.config.*"
Write-Host "Found $($viteConfigs.Count) vite config file(s):"
foreach ($config in $viteConfigs) {
    Write-Host "  - $($config.FullName.Replace((Get-Location).Path, '.'))"
}
Write-Host ""

# 7. Check package.json files
Write-Host "7. PACKAGE.JSON FILES CHECK" -ForegroundColor Yellow
Write-Host "----------------------------"
$pkgJsons = Get-ChildItem -Recurse -Filter "package.json" -Depth 2
Write-Host "Found $($pkgJsons.Count) package.json file(s):"
foreach ($pkg in $pkgJsons) {
    $content = Get-Content $pkg | ConvertFrom-Json
    $path = $pkg.FullName.Replace((Get-Location).Path, '.')
    Write-Host "  - $path (name: $($content.name))"
}
Write-Host ""

# 8. Try to start vite with debug
Write-Host "8. VITE VERSION CHECK" -ForegroundColor Yellow
Write-Host "---------------------"
Write-Host "Running: pnpm exec vite --version"
try {
    $output = pnpm exec vite --version 2>&1
    Write-Host "Vite version: $output"
} catch {
    Write-Host "Error: $_"
}
Write-Host ""

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "DIAGNOSTIC COMPLETE" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
