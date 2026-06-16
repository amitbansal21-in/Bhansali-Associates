<?php
/**
 * Reusable Form Input Component
 * Supports Floating Labels, validations, and accessibility.
 * 
 * Variables:
 * @param string $id
 * @param string $name
 * @param string $type ('text', 'email', 'tel', 'textarea')
 * @param string $label
 * @param bool $required (Optional)
 * @param string $error_msg (Optional)
 */
$is_textarea = ($type === 'textarea');
$is_required = isset($required) && $required ? true : false;
?>
<div class="form-group form-floating">
    <?php if ($is_textarea): ?>
        <textarea 
            id="<?php echo escape_html($id); ?>" 
            name="<?php echo escape_html($name); ?>" 
            class="form-control" 
            placeholder="<?php echo escape_html($label); ?>"
            <?php echo $is_required ? 'required aria-required="true"' : ''; ?>
        ></textarea>
    <?php else: ?>
        <input 
            type="<?php echo escape_html($type); ?>" 
            id="<?php echo escape_html($id); ?>" 
            name="<?php echo escape_html($name); ?>" 
            class="form-control" 
            placeholder="<?php echo escape_html($label); ?>"
            <?php echo $is_required ? 'required aria-required="true"' : ''; ?>
        >
    <?php endif; ?>
    
    <label for="<?php echo escape_html($id); ?>" class="form-label">
        <?php echo escape_html($label); ?>
        <?php if ($is_required): ?><span class="text-error ml-4" aria-hidden="true">*</span><?php endif; ?>
    </label>
    
    <div class="form-error-msg" id="<?php echo escape_html($id); ?>-error" role="alert">
        <?php echo escape_html($error_msg ?? 'This field is required.'); ?>
    </div>
</div>
