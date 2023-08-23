<?php
if (isset($_POST['submit']) && !empty($_POST['message'])) {
  $filename = 'chatlogs.txt';
  $message = htmlspecialchars($_POST['message']);
  $message = date('Y-m-d H:i:s') . ' - ' . $message . "\n";

  if (file_put_contents($filename, $message, FILE_APPEND)) {
    header("Location: index.html"); // Redirect back to the chat page
  } else {
    echo "Error writing to chatlogs.txt";
  }
}
?>
