<?php

/**
 * @file
 * Customizable settings for Brandon's Blog Theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Modify system theme settings hook.
 */
function bbt_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {
  if (isset($form_id)) {
    return;
  }

  $form['accent_color1'] = [
    '#type'          => 'color',
    '#title'         => t('Accent Color'),
    '#default_value' => theme_get_setting('accent_color1'),
    '#description'   => t("Primary Accent Color."),
  ];

  $form['accent_color2'] = [
    '#type'          => 'color',
    '#title'         => t('Secondary Color'),
    '#default_value' => theme_get_setting('accent_color2'),
    '#description'   => t("Secondary Accent Color."),
  ];
}
