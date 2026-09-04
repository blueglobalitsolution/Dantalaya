# Script to apply verified, non-breaking SEO optimizations across all 20 pages
$ErrorActionPreference = "Stop"

$metaMap = @{
    "index.html" = @{
        title = "Best Dental Clinic & Implant Centre in Vadodara | Dantalaya"
        desc = "Looking for the best dental clinic in Vadodara? Dantalaya offers painless dental implants, root canal treatment, clear aligners, teeth whitening & cosmetic dentistry. Call +91 98242 52667."
        canonical = "https://dantalaya.in/"
        type = "website"
        schema = "index"
    }
    "about-us.html" = @{
        title = "About Dantalaya | Experienced Dentists in Vadodara Since 2005"
        desc = "Meet Dr. Kavit Shah and our team of skilled dental specialists at Dantalaya Dental Clinic Vadodara. Over 18+ years of expertise in advanced oral healthcare."
        canonical = "https://dantalaya.in/about-us.html"
        type = "website"
    }
    "contact-us.html" = @{
        title = "Contact Dantalaya Dental Clinic | Old Padra Road, Vadodara"
        desc = "Get in touch with Dantalaya Dental Clinic on Old Padra Road, Vadodara. Book your appointment for dental implants, aligners, and cosmetic dental care today."
        canonical = "https://dantalaya.in/contact-us.html"
        type = "website"
        schema = "contact"
    }
    "treatments.html" = @{
        title = "Dental Treatments & Services in Vadodara | Dantalaya Clinic"
        desc = "Explore complete dental treatments at Dantalaya Vadodara: Dental Implants, Root Canal, Invisible Braces, Teeth Whitening, Crowns, Bridges, and Gum Surgeries."
        canonical = "https://dantalaya.in/treatments.html"
        type = "website"
    }
    "dental-implants-city.html" = @{
        title = "Best Dental Implants in Vadodara | Dr. Kavit Shah | Dantalaya"
        desc = "Restore missing teeth with permanent, painless dental implants in Vadodara at Dantalaya. Advanced titanium implants, single & full mouth rehabilitation."
        canonical = "https://dantalaya.in/dental-implants-city.html"
        type = "article"
    }
    "invisible-braces-city.html" = @{
        title = "Clear Aligners & Invisible Braces in Vadodara | Dantalaya"
        desc = "Straighten your teeth discreetly with invisible braces & clear aligners in Vadodara. Removable, comfortable, and customized smile correction for all ages."
        canonical = "https://dantalaya.in/invisible-braces-city.html"
        type = "article"
    }
    "root-canal-treatment-city.html" = @{
        title = "Painless Root Canal Treatment in Vadodara | Dantalaya RCT"
        desc = "Relieve tooth pain fast with painless Single-Sitting Root Canal Treatment (RCT) in Vadodara at Dantalaya. Advanced rotary endodontics by expert dentists."
        canonical = "https://dantalaya.in/root-canal-treatment-city.html"
        type = "article"
    }
    "smile-designing-city.html" = @{
        title = "Smile Designing & Cosmetic Dentist in Vadodara | Dantalaya"
        desc = "Get your dream smile with personalized digital smile designing and cosmetic dentistry in Vadodara at Dantalaya. Veneers, bonding & aesthetic contouring."
        canonical = "https://dantalaya.in/smile-designing-city.html"
        type = "article"
    }
    "teeth-whitening-city.html" = @{
        title = "Professional Teeth Whitening in Vadodara | Dantalaya"
        desc = "Brighten your smile up to 8 shades with professional teeth whitening in Vadodara at Dantalaya. Safe, effective, and fast in-office laser whitening."
        canonical = "https://dantalaya.in/teeth-whitening-city.html"
        type = "article"
    }
    "teeth-fillings.html" = @{
        title = "Dental Fillings & Tooth Cavity Treatment Vadodara | Dantalaya"
        desc = "Durable tooth-colored composite dental fillings in Vadodara at Dantalaya Clinic. Pain-free cavity removal, tooth decay repair, and natural aesthetic results."
        canonical = "https://dantalaya.in/teeth-fillings.html"
        type = "article"
    }
    "dentures-city.html" = @{
        title = "Custom Dentures in Vadodara | Complete & Partial Dentures"
        desc = "High quality complete, partial, and implant-supported flexible dentures in Vadodara at Dantalaya. Restore chewing ability, comfort, and confident smiles."
        canonical = "https://dantalaya.in/dentures-city.html"
        type = "article"
    }
    "teeth-braces-city.html" = @{
        title = "Teeth Braces & Orthodontic Treatment in Vadodara | Dantalaya"
        desc = "Expert orthodontic care and braces in Vadodara at Dantalaya. Metal, ceramic, and self-ligating braces to fix crooked teeth, gaps, and bite misalignment."
        canonical = "https://dantalaya.in/teeth-braces-city.html"
        type = "article"
    }
    "teeth-cleaning-city.html" = @{
        title = "Teeth Cleaning & Dental Hygiene in Vadodara | Dantalaya"
        desc = "Prevent gum disease and maintain optimal oral hygiene with professional teeth cleaning and dental prophylaxis at Dantalaya Dental Clinic in Vadodara."
        canonical = "https://dantalaya.in/teeth-cleaning-city.html"
        type = "article"
    }
    "teeth-scaling-city.html" = @{
        title = "Teeth Scaling & Deep Gum Cleaning in Vadodara | Dantalaya"
        desc = "Remove stubborn plaque, tartar, and bacteria with advanced ultrasonic teeth scaling and root planing in Vadodara at Dantalaya. Protect your gums and teeth."
        canonical = "https://dantalaya.in/teeth-scaling-city.html"
        type = "article"
    }
    "tooth-crown-city.html" = @{
        title = "Dental Crowns & Tooth Caps in Vadodara | Dantalaya Clinic"
        desc = "Protect weak or broken teeth with custom zirconia, ceramic, and PFM dental crowns in Vadodara at Dantalaya. Strong, natural-looking tooth restoration."
        canonical = "https://dantalaya.in/tooth-crown-city.html"
        type = "article"
    }
    "tooth-extraction-city.html" = @{
        title = "Painless Tooth Extraction in Vadodara | Wisdom Tooth Removal"
        desc = "Safe and gentle painless tooth extraction and surgical wisdom tooth removal in Vadodara at Dantalaya Clinic. Fast recovery and compassionate care."
        canonical = "https://dantalaya.in/tooth-extraction-city.html"
        type = "article"
    }
    "dental-bridges-city.html" = @{
        title = "Dental Bridges in Vadodara | Replace Missing Teeth | Dantalaya"
        desc = "Replace one or more missing teeth with durable, aesthetic dental bridges in Vadodara at Dantalaya Clinic. Seamless fit, natural look, and restored bite."
        canonical = "https://dantalaya.in/dental-bridges-city.html"
        type = "article"
    }
    "gingivitis-city.html" = @{
        title = "Gingivitis & Gum Disease Treatment in Vadodara | Dantalaya"
        desc = "Stop bleeding gums and reverse gingivitis with expert periodontal care in Vadodara at Dantalaya Clinic. Early diagnosis and effective gum healing."
        canonical = "https://dantalaya.in/gingivitis-city.html"
        type = "article"
    }
    "gum-surgeries-city.html" = @{
        title = "Gum Surgeries & Periodontal Treatment Vadodara | Dantalaya"
        desc = "Advanced periodontal flap surgery, gum grafting, and cosmetic crown lengthening in Vadodara at Dantalaya Dental Clinic. Expert gum specialists."
        canonical = "https://dantalaya.in/gum-surgeries-city.html"
        type = "article"
    }
    "the-magic-of-clear-aligners-a-modern-solution-to-straighten-your-smile.html" = @{
        title = "The Magic of Clear Aligners in Vadodara | Dantalaya Guide"
        desc = "Discover how clear aligners work, their benefits over traditional braces, and why they are the modern solution for straighter teeth in Vadodara."
        canonical = "https://dantalaya.in/the-magic-of-clear-aligners-a-modern-solution-to-straighten-your-smile.html"
        type = "article"
    }
}

$indexSchema = @'
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://dantalaya.in/#dentist",
      "name": "Dantalaya Cosmetic Dental Clinic and Implant Centre",
      "image": "https://dantalaya.in/wp-content/uploads/2021/04/Dantalaya-3-1024x281.png",
      "url": "https://dantalaya.in/",
      "telephone": "+91-98242-52667",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "SF-1/2, 2nd Floor, Shailesh Tower, Near Tube Company, Old Padra Road",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390020",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.298283,
        "longitude": 73.167237
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "13:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "17:00",
          "closes": "20:30"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Kavit M. Shah",
        "jobTitle": "Chief Implantologist & Cosmetic Dentist",
        "alumniOf": "New York University (NYU)"
      },
      "medicalSpecialty": [
        "Dentistry",
        "Implantology",
        "Endodontics",
        "Orthodontics",
        "Cosmetic Dentistry",
        "Periodontics"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dantalaya.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Dantalaya for dental treatment in Vadodara?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dantalaya has provided world-class dental care in Vadodara since 2005, led by Dr. Kavit Shah (BDS, COA - NYU USA). We offer painless procedures, sterile equipment, digital smile designing, and advanced implantology."
          }
        },
        {
          "@type": "Question",
          "name": "Is dental implant treatment painful at Dantalaya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, dental implant placement at Dantalaya is performed under gentle local anesthesia and advanced precision techniques, ensuring a comfortable, virtually pain-free experience."
          }
        },
        {
          "@type": "Question",
          "name": "What are the clinic timings at Dantalaya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dantalaya is open Monday through Saturday from 9:30 AM to 1:30 PM and 5:00 PM to 8:30 PM. Call +91 98242 52667 to schedule an appointment."
          }
        }
      ]
    }
  ]
}
</script>
'@

$contactSchema = @'
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": "https://dantalaya.in/contact-us.html#clinic",
  "name": "Dantalaya Cosmetic Dental Clinic and Implant Centre",
  "image": "https://dantalaya.in/wp-content/uploads/2021/04/Dantalaya-3-1024x281.png",
  "url": "https://dantalaya.in/contact-us.html",
  "telephone": "+91-98242-52667",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SF-1/2, 2nd Floor, Shailesh Tower, Near Tube Company, Old Padra Road",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390020",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.298283,
    "longitude": 73.167237
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "13:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "20:30"
    }
  ]
}
</script>
'@

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($item in $metaMap.GetEnumerator()) {
    $fileName = $item.Key
    $meta = $item.Value
    
    if (-not (Test-Path $fileName)) {
        Write-Warning "File not found: $fileName"
        continue
    }
    
    $content = [System.IO.File]::ReadAllText((Resolve-Path $fileName), [System.Text.Encoding]::UTF8)
    
    # 1. Build new SEO head block
    $seoBlock = @"
	<title>$($meta.title)</title>
	<meta name="description" content="$($meta.desc)" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<link rel="canonical" href="$($meta.canonical)" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="$($meta.type)" />
	<meta property="og:title" content="$($meta.title)" />
	<meta property="og:description" content="$($meta.desc)" />
	<meta property="og:url" content="$($meta.canonical)" />
	<meta property="og:site_name" content="Dantalaya Cosmetic Dental Clinic and Implant Centre" />
	<meta property="og:image" content="https://dantalaya.in/wp-content/uploads/2021/04/Dantalaya-3-1024x281.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="$($meta.title)" />
	<meta name="twitter:description" content="$($meta.desc)" />
	<meta name="twitter:image" content="https://dantalaya.in/wp-content/uploads/2021/04/Dantalaya-3-1024x281.png" />
"@

    if ($meta.schema -eq "index") {
        $seoBlock += "`n" + $indexSchema
    } elseif ($meta.schema -eq "contact") {
        $seoBlock += "`n" + $contactSchema
    }

    # 2. Replace top head items up to <style id="wp-img-auto-sizes-contain-inline-css">
    $headPattern = '(?s)<title>.*?</title>.*?<style id="wp-img-auto-sizes-contain-inline-css">'
    if ($content -match $headPattern) {
        $content = $content -replace $headPattern, ($seoBlock + "`n<style id=`"wp-img-auto-sizes-contain-inline-css`">")
    } else {
        Write-Warning "Could not find top head pattern in $fileName"
    }

    # 3. Strip dead WordPress API/RSD/shortlink/old-canonical tags
    $apiPattern = '(?s)<link rel="https://api\.w\.org/".*?<meta name="generator" content="Elementor'
    if ($content -match $apiPattern) {
        $content = $content -replace $apiPattern, '<meta name="generator" content="Elementor'
    }

    # 4. Fix Logo Alt attributes (header & footer)
    $content = $content.Replace('src="wp-content/uploads/2021/04/Dantalaya-3-1024x281.png" class="attachment-large size-large wp-image-4472" alt=""',
                                'src="wp-content/uploads/2021/04/Dantalaya-3-1024x281.png" class="attachment-large size-large wp-image-4472" alt="Dantalaya Cosmetic Dental Clinic and Implant Centre Vadodara Logo"')
    $content = $content.Replace('src="wp-content/uploads/2021/04/Dantalaya-3.png" class="attachment-full size-full wp-image-4472" alt=""',
                                'src="wp-content/uploads/2021/04/Dantalaya-3.png" class="attachment-full size-full wp-image-4472" alt="Dantalaya Cosmetic Dental Clinic and Implant Centre Vadodara Logo"')

    # 5. Fix Page-Specific Headings
    if ($fileName -eq "about-us.html") {
        $content = $content.Replace('<h2 class="elementor-heading-title elementor-size-default">Our Doctors</h2>',
                                    '<h1 class="elementor-heading-title elementor-size-default">Our Doctors &amp; Dental Specialists</h1>')
    } elseif ($fileName -eq "contact-us.html") {
        $content = $content.Replace('<h2 class="elementor-heading-title elementor-size-default">Contact Us</h2>',
                                    '<h1 class="elementor-heading-title elementor-size-default">Contact Us</h1>')
    } elseif ($fileName -eq "treatments.html") {
        $content = $content.Replace('<h2 class="elementor-heading-title elementor-size-default">Treatments We Offered</h2>',
                                    '<h1 class="elementor-heading-title elementor-size-default">Dental Treatments &amp; Services We Offer</h1>')
    } else {
        # Check if this is one of the 15 treatment pages with a second H1 paragraph
        $h1Matches = [regex]::Matches($content, '<h1 class="elementor-heading-title elementor-size-default">([\s\S]*?)</h1>')
        if ($h1Matches.Count -gt 1) {
            $secondH1 = $h1Matches[1].Value
            $replacementP = $secondH1 -replace '^<h1', '<p' -replace '</h1>$', '</p>'
            # Use IndexOf/Substring or exact string replacement for safe single replacement
            $idx = $content.IndexOf($secondH1)
            if ($idx -ge 0) {
                $content = $content.Substring(0, $idx) + $replacementP + $content.Substring($idx + $secondH1.Length)
            }
        }
    }

    [System.IO.File]::WriteAllText((Resolve-Path $fileName), $content, $utf8NoBom)
    Write-Host "Updated SEO for: $fileName" -ForegroundColor Green
}

Write-Host "SEO Optimization complete for all 20 pages!" -ForegroundColor Cyan
