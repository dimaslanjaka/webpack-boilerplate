<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yusril Laundry</title>
  <!-- base theme -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
  <!-- icons -->
  <link rel="stylesheet" href="https://rawcdn.githack.com/dimaslanjaka/Web-Manajemen/0f634f242ff259087c9fe176e8f28ccaebb5c015/css/all.min.css">
  <!-- main styling -->
  <style>
    <?php include(__DIR__ . '/source/style.css'); ?>
  </style>
</head>

<body>
  <!-- navbar -->
  <?php include(__DIR__ . '/source/navbar.html'); ?>

  <main id="content" class="mt-4">
    <!-- intro -->
    <?php include(__DIR__ . '/source/intro.html'); ?>
    <?php include(__DIR__ . '/source/feature.html'); ?>
    <?php include(__DIR__ . '/source/testimonial.html'); ?>

    <!-- collage  -->
    <?php include(__DIR__ . '/source/collage.html'); ?>
  </main>

  <!-- base theme -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
</body>

</html>